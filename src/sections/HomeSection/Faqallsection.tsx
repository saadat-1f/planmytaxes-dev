import React from "react";
import style from "../../styles/Homepg/faq.module.css";
import FaqSection from "../HomeSection/FaqSection";

const FaqallSection = () => {
  return (
    <>
      <div className={style.faqSection}>
        <div className={style.col1}>
         
          <div className={style.header}>Frequently Asked Questions</div>
        </div>
        
        <FaqSection />

      </div>
    </>
  );
};

export default FaqallSection;
