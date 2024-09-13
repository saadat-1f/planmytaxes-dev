import React, { useEffect, useState } from "react";
import style from "../../styles/Homepg/nav.module.css";

import Link from "next/link";

export default function DarkNavbar() {
  const [activeNav, setActiveNav] = useState<string>("home");
  const [open, setOpen] = useState<boolean>(false);

  const handleNavClick = (navItem: string) => {
    setActiveNav(navItem);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [open]);

  return (
    <div className={style.darknavbar_container}>
      <Link href="/">
        {" "}
        <div className={style.col2}>
          <div className={style.box1}></div>
          <div className={style.box2}></div>
          <div className={style.header}>
            planmy<span className={style.colortext}>Tax</span>
          </div>
        </div>
      </Link>
      <div className={style.navLinks}>
        <Link
          href="/"
          className={activeNav === "home" ? style.active : ""}
          onClick={() => handleNavClick("home")}
        >
          Homepage
        </Link>

        <Link
          href="/about"
          className={activeNav === "about" ? style.active : ""}
          onClick={() => handleNavClick("about")}
        >
          About
        </Link>

        <Link
          href="/blogs"
          className={activeNav === "blogs" ? style.active : ""}
          onClick={() => handleNavClick("blogs")}
        >
          Blogs
        </Link>
        <Link
          href="/chat"
          className={activeNav === "chat" ? style.active : ""}
          onClick={() => handleNavClick("chat")}
        >
          {" "}
          <button className={style.aibtn}>Try AI</button>
        </Link>
      </div>

      <svg
        className={style.hamburger}
        onClick={() => setOpen(true)}
        width="32px"
        height="32px"
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
            d="M20 7L4 7"
            stroke="#ffffff"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>{" "}
          <path
            d="M20 12L4 12"
            stroke="#ffffff"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>{" "}
          <path
            d="M20 17L4 17"
            stroke="#ffffff"
            stroke-width="1.5"
            stroke-linecap="round"
          ></path>{" "}
        </g>
      </svg>
      {open && (
        <div className={style.navigationDrawer}>
          <div className={style.navigatorHeader}>
            <Link href="/">
              {" "}
              <div className={style.col2}>
                <div className={style.box1}></div>
                <div className={style.box2}></div>
                <div className={style.header}>
                  planmy<span className={style.colortext}>Tax</span>
                </div>
              </div>
            </Link>

            <svg
              onClick={() => setOpen(false)}
              width="32px"
              height="32px"
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
                <g id="Menu / Close_MD">
                  {" "}
                  <path
                    id="Vector"
                    d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                    stroke="#fdfcfc"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div className={style.navigatorLinks}>
            <Link
              href="/"
              className={activeNav === "home" ? style.active : ""}
              onClick={() => handleNavClick("home")}
            >
              homepage
            </Link>
            <Link href="/about">
              <div onClick={() => setOpen(false)}>about</div>
            </Link>
            <Link href="/blogs">
              <div onClick={() => setOpen(false)}>Blogs</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
