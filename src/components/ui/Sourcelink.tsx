import React from "react";
import { SourceLink } from "@/pages/chat";

interface SourceLinkProps {
  sourceLinks: SourceLink[];
}
const Sourcelink: React.FC<SourceLinkProps> = ({ sourceLinks }) => {
  return (
    <>
      <div className="new_source_option">
        <div className="new_source_title">
          <svg
            width="24px"
            height="24px"
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
                d="M7 8H21M7 12H21M7 16H21M3 8H3.01M3 12H3.01M3 16H3.01"
                stroke="#fafafa"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <a href="/chat">Source </a>
        </div>

        {sourceLinks?.map((link) => (
          <div className="add_input_source">
            <h3 className="links_title">{link.title}</h3>
            <a
              href="https://1finance.co.in/calculator/nps"
              className="source_link"
              target="__blank"
            >
              {link.link}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sourcelink;
