import React from "react";
import style from "../styles/about.module.css";

const about = () => {
  return (
    <>
      <div className={style.aboutpages}>
        <div className={style.innerrow}>
          <div className={style.aboutTitle}>
            <h3 className={style.title}>About</h3>
            <h1 className={style.h1tag}>Your go to companion for Tax guidance</h1>
            <p className={style.titlepragraph}>
            PlanMyTax.ai is an AI driven resource for DIY tax filing. Designed with simplicity and efficiency in mind, our platform empowers individuals to navigate tax season with ease, offering essential tools and guidance tailored for the do-it-yourself taxpayer.
            </p>
          </div>
          <div className={style.aboutimges}>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
