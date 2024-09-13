import React, { useState } from "react";
import style from "../../styles/Homepg/herosection.module.css";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className={style.banner}>
      <div className={style.text1}>
        <div className={style.p1}>
          Simplifying income <span className={style.colortext}>tax</span> for
          you in india.
        </div>
        <div className={style.p2}>
          Welcome to Planmytax.ai, your trusted guide in navigating the
          complexities of income tax in India. We aim to simplify tax planning
          and filing make it accessible and understandable for everyone.
        </div>
        <div className={style.p3}>
          <Link href="/chat">
            {" "}
            <button className={style.aibtn}>
              <svg
                width="34px"
                height="34px"
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
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              Try out all new AI
            </button>
          </Link>
        </div>
      </div>

     
    </div>
  );
};

export default HeroSection;
