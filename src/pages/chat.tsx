import React, { useState, useEffect, useRef } from "react";
import OptionChat from "../sections/Aichatsection/OptionChat";
import AnswerSection from "@/sections/Aichatsection/AnswerSection";
import { Loader } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import RegisterModal from "@/components/ui/RegisterModal";
import NetworkLoader from "@/components/ui/NetworkLoader";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Sourcelink from "@/components/ui/Sourcelink";

interface ConversationEntry {
  data: string;
  author: string;
}

type Question = {
  id: string;
  title: string;
  // other properties here if needed
};

type Message = {
  question: string;
  answer: string;
};

export type SourceLink = {
  title: string;
  link: string;
};
const AIChat = () => {
  const [chatInput, setChatInput] = useState<string>("");
  const [conversationId, setConversationId] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [sourceLinks, setSourceLinks] = useState<SourceLink[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState(false);
  // const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [conversation, setConversation] = useState<ConversationEntry[]>([]);
  const router = useRouter();
  const { query }: any = router.query;
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const demoQuestions = [
    // {value :" How to Ask"},
    { value: "What deductions can you claim?" },

    { value: "Can I claim deductions for investing in NPS?" },
    {
      value:
        "Do not attempt asking question directly on tax rulings or legal rulings",
    },
    { value: "How do I save on taxes?" },
    { value: "How can I calculate my taxable income?" },
    {
      value:
        "Avoid asking for recommendations on specific investments like stocks, mutual funds, or other financial products.",
    },
  ];

  const fetchChat = async (input: any) => {
    // console.log(" this is chatINput ", chatInput, " thisis input ", input)
    if (input.value === "" || loading) {
      // toast.error("Query cannot be empty")
      return;
    }
    const newMessage: ConversationEntry = { data: input.value, author: "user" };
    setConversation((prevConversation) => [...prevConversation, newMessage]);
    // setQuestions((prevQuestions) => [...prevQuestions, input.value]);
    // setQuestions((prevQuestions) => {
    //   const newQuestions = [...prevQuestions, input.value];
    //   // Save questions to local storage
    //   localStorage.setItem("questions", JSON.stringify(newQuestions));
    //   return newQuestions;
    // });

    setChatInput("");

    try {
      setLoading(true);

      // context providing to the ai agent
      let lastConversations =
        conversation.length < 5
          ? conversation.map((entry) => entry.data).join("; ")
          : conversation
              .slice(-5)
              .map((entry) => JSON.stringify(entry.data))
              .join("; ");

      const prompt = `${
        conversation.length > 1
          ? `last few conversations are as follows: ${lastConversations};`
          : ""
      } Current Query is: ${input.value}`;

      console.log(prompt, " prompt");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_AI_ENDPOINT}/ai`,

        // `https://dev-backend.planmytax.ai/ai`,

        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: prompt,
            length: conversation.length,
            conversationId: conversationId,
            question: input.value,
          }),
        }
      );

      fetchConversations();

      if (response) setLoading(false);

      const responseData = await response.json();

      if (responseData.status == 429) return setShowRegister(true);

      // if (responseData.status(429)) toast.error("Free trials exceeded")

      setConversation((prevConversation) => [
        ...prevConversation,
        { data: responseData.message.response, author: "pmt" },
      ]);
      console.log("links", responseData.links);

      if (responseData.links) {
        const links = responseData.links.split("\n").map((link: string) => {
          const url = new URL(link);
          let domain = url.hostname;

          // Remove 'www.' from the start of the domain
          if (domain.startsWith("www.")) {
            domain = domain.slice(4);
          }

          // Remove everything after the first '.'
          const firstDotIndex = domain.indexOf(".");
          if (firstDotIndex !== -1) {
            domain = domain.slice(0, firstDotIndex);
          }

          const title = domain.charAt(0).toUpperCase() + domain.slice(1);
          return { title, link };
        });

        setSourceLinks(links);
      }

      setConversationId(responseData.conversation.id);
    } catch (error) {
      console.error("Error fetching data:", error);
      // toast.error("Error fetching answer");
    } finally {
      setLoading(false);
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  interface LinkRendererProps {
    href: string;
    children: React.ReactNode;
  }

  const renderarConfigs = {
    link: ({ href, children }: { href: any; children: any }) => (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  };

  const messages = conversation.map((entry, index) => (
    <div key={index} className="block w-full float-right">
      <div
        className={
          entry.author === "user"
            ? "user_chat"
            : "pmt_chat" + " ai_conversation"
        }
      >
        {entry?.data?.split("\n\n").map((text: any, index: number) => {
          return (
            <>
              <Markdown
                remarkPlugins={[remarkGfm as any]}
                components={renderarConfigs as any}
              >
                {text.replaceAll("", "").replace("\\n", "")}
              </Markdown>
              {entry.author !== "user" && <>&nbsp;</>}
            </>
          );
        })}
      </div>
      <div ref={messagesEndRef}></div>
    </div>
  ));
  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    fetchConversations();
  }, []);
  useEffect(() => {
    if (conversationId) {
      fetchSingleConversation(conversationId);
    }
  }, [conversationId]);

  useEffect(() => {
    console.log("convo", conversation);
  }, [conversation]);

  const fetchConversations = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_AI_ENDPOINT}/chat`,
        // `https://dev-backend.planmytax.ai/chat`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("chatresponse2", data);
      setQuestions(data.message);
      return data.message;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const fetchSingleConversation = async (conversationId: string) => {
    console.log({ conversationId });
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_AI_ENDPOINT}/conversation`,
        // `https://dev-backend.planmytax.ai/conversation`,

        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            conversationId: conversationId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("conversation", data.message.messages);
      let output = [];

      if (data && data.message && data.message.messages) {
        output = data.message.messages.flatMap((item: Message) => [
          {
            data: item.question.replace("Current Query is: ", "").trim(),
            author: "user",
          },
          { data: item.answer, author: "pmt" },
        ]);
      }

      console.log({ output });
      setConversation(output);
      return data.message.messages;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const changeInputValue = (e: any) => {
    // console.log('entering something ', e.target, ' and chatinput is ', chatInput)
    setChatInput(e.target.value);
  };

  useEffect(() => {
    const keyboardSend = (e: KeyboardEvent) => {
      if (e.key === "Enter" && inputRef.current) {
        fetchChat(inputRef.current);
      }
    };
    window.document.addEventListener("keydown", keyboardSend);
    return () => window.document.removeEventListener("keydown", keyboardSend);
  }, [chatInput]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (chatContainerRef.current) {
        // console.log('scrolling ', chatContainerRef.current.scrollTop, ' height ', chatContainerRef.current.scrollHeight)
        // chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        window.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [conversation]);

  useEffect(() => {
    if (query !== undefined) setChatInput(query.split("-").join(" "));
  }, [query]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Load questions from local storage when component mounts
  useEffect(() => {
    // if (hasMounted) {
    //   const storedQuestions = localStorage.getItem("questions");
    //   if (storedQuestions) {
    //     setQuestions(JSON.parse(storedQuestions));
    //   }
    // }

    console.log({ questions });
  }, [hasMounted]);

  return (
    <>
      {/* {messages.length > 0 && (
        <div className="innerborder" ref={chatContainerRef}>
          <div className="">{messages}</div>
        </div>
      )} */}
      <div className="aiinputs ">
        <div className="innerinput">
          <div className="innputouterline">
            <input
              type="text"
              className="inputsection"
              placeholder="Feel free to ask anything related to tax!"
              ref={inputRef}
              value={chatInput}
              onChange={changeInputValue}
              autoFocus
            />
            <button
              className={`btn ${
                loading ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={() => {
                if (inputRef.current) {
                  if (loading) return;
                  fetchChat(inputRef.current);
                }
              }}
            >
              {loading ? (
                <Loader className="stroke-black fill-black" />
              ) : (
                <svg
                  className="hover:translate-x-1 hover:scale-[1.03] transition-all duration-600 delay-200"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="#000"
                    fillRule="evenodd"
                    d="M2.345 2.245a1 1 0 0 1 1.102-.14l18 9a1 1 0 0 1 0 1.79l-18 9a1 1 0 0 1-1.396-1.211L4.613 13H10a1 1 0 1 0 0-2H4.613L2.05 3.316a1 1 0 0 1 .294-1.071z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="disclaimer text-xs md:text-md">
            Read Disclaimer
            <div className="tooltip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-info"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <span className="tooltiptext">
                For the chatbot, we're using GPT + Gemimi model underneath
                <br />
                use case are only for Educational Purposes.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <AnswerSection /> */}
      {true && (
        <>
          <div className="progressbar_container">
            {loading && (
              <div
                className={`progressbar_row ${loading ? "loading" : ""}`}
              ></div>
            )}
          </div>
          <div className="chat_body">
            <div className="new_chat_option">
              <div className="new_chat_title">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 6L12 18"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M18 12L6 12"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <a href="/chat">New chat</a>
              </div>
              <div className="add_input_title">
                {/* <div className="input_outer_border">
                  How do I save on taxes?
                </div>
                <div className="input_outer_border">what is hra</div>
                <div className="input_outer_border">what is hra</div> */}

                {questions.map((question, index) => (
                  <div
                    onClick={() => {
                      setConversationId(question.id);
                    }}
                    className="input_outer_border"
                    key={question.id}
                  >
                    {question.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="chat_option_container">
              {messages.length > 0 ? (
                <div className="outerline">
                  {/* {loading ? (
                    <NetworkLoader
                      customClass="text-gray-300 flex flex-col gap-2 text-lg font-bold"
                      titles={[
                        "Processing...",
                        "Loading Data...",
                        "Almost There...",
                        "Validating...",
                        "Finalizing...",
                      ]}
                    />
                  ) : ( */}
                  <div className="front_message">{messages}</div>
                  {/* // )} */}
                </div>
              ) : (
                <div className="chat_wraper">
                  <div className="text_option_title">
                    <div className="text_option_container">
                      <div className="img_text_option">
                        {/* <img
                          src="/icons/light-bulb-svgrepo-com.svg"
                          alt=""
                          width={20}
                        /> */}
                      </div>
                      <h1> How to Ask</h1>
                    </div>

                    <div className="text_option_container">
                      <div className="img_text_option">
                        {/* <img
                          src="/icons/mail-message-chat-svgrepo-com.svg"
                          alt=""
                        /> */}
                      </div>
                      <h1> What to Ask</h1>
                    </div>
                    <div className="text_option_container">
                      <div className="img_text_option">
                        {/* <img
                          src="/icons/education-form-page-svgrepo-com.svg"
                          width={40}
                          alt=""
                        /> */}
                      </div>
                      <h1> What not to Ask</h1>
                    </div>
                  </div>
                  <div className=" grid grid-cols-3 grid-rows-2 gap-8 pt-3 px-10">
                    {demoQuestions.map((each, index) => {
                      return (
                        <div
                          key={index}
                          className=" options_row w-full h-full flex justify-center items-center border border-gray-700 rounded  cursor-pointer "
                          onClick={(e) => {
                            fetchChat(each);
                          }}
                        >
                          {each.value}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="aiinputs ">
                <div
                  className="innerinput"
                  style={{ width: sourceLinks.length > 0 ? "66%" : "83%" }}
                >
                  <div className="innputouterline">
                    <input
                      type="text"
                      className="inputsection"
                      placeholder="Feel free to ask anything related to tax!"
                      ref={inputRef}
                      value={chatInput}
                      onChange={changeInputValue}
                      autoFocus
                    />
                    <button
                      className={`btn ${
                        loading ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                      onClick={() => {
                        if (inputRef.current) {
                          if (loading) return;
                          fetchChat(inputRef.current);
                        }
                      }}
                    >
                      {loading ? (
                        <Loader className="stroke-black fill-black" />
                      ) : (
                        <svg
                          className="hover:translate-x-1 hover:scale-[1.03] transition-all duration-600 delay-200"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                        >
                          <path
                            fill="#000"
                            fillRule="evenodd"
                            d="M2.345 2.245a1 1 0 0 1 1.102-.14l18 9a1 1 0 0 1 0 1.79l-18 9a1 1 0 0 1-1.396-1.211L4.613 13H10a1 1 0 1 0 0-2H4.613L2.05 3.316a1 1 0 0 1 .294-1.071z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div className="disclaimer text-xs md:text-md">
                    Read Disclaimer
                    <div className="tooltip">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-info"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                      <span className="tooltiptext">
                        For the chatbot, we're using GPT + Gemimi model
                        underneath
                        <br />
                        use case are only for Educational Purposes.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {sourceLinks.length > 0 && <Sourcelink sourceLinks={sourceLinks} />}
          </div>
        </>
      )}
      {loading ? (
        <div
          key={conversation.at(-1)?.data}
          className="w-full h-full fixed top-0 left-0 flex justify-center items-center"
        >
          <NetworkLoader
            customClass="text-gray-300 flex flex-col gap-2 text-lg font-bold"
            titles={[
              "Processing...",
              "Loading Data...",
              "Almost There...",
              "Validating...",
              "Finalizing...",
            ]}
          />
        </div>
      ) : null}
      {showRegister ? (
        <RegisterModal
          isOpen={showRegister}
          onClose={() => setShowRegister(false)}
        />
      ) : null}
    </>
  );
};

export default AIChat;
