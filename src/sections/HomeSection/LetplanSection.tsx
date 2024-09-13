import React from "react";
import style from "../../styles/Homepg/letplanSection.module.css";
import laptop from "../../public/asset/images/laptop.png";
import Link from "next/link";

const LetplanSection = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.col1}>
          
          <div className={style.video_chat}>
            <iframe
            className={style.iframe}
              width="1022"
              height="575"
              src="https://www.youtube.com/embed/yyMywFYDnzA"
              title="TaxGPT: AI Tax co-pilot for accountants and tax professionals"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        
        </div>
      
        <div className={style.deatilsSec}>
          <div className={style.deatilsTax}>
            <div className={style.title}>
              How to Choose Between Old and New Tax Regimes?
            </div>
            <div className={style.inner_titlep2}>
              The income tax Act, 1962 offers two regimes – the Old Regime and
              the New Regime, each with its own set of tax slabs
            </div>
            {/* <div className={style.para1}>Old regime</div> */}
            <div className={style.para2}>
              <div className={style.marquee_container}>
                <div className={style.marquee_slider}>
                  <div className={style.marquee_slider_box}>Tax saved</div>
                  <div className={style.marquee_slider_box}>Check regime</div>
                  <div className={style.marquee_slider_box}>Time Saved</div>
                  <div className={style.marquee_slider_box}>Tax saved</div>
                  <div className={style.marquee_slider_box}>Check regime</div>
                  <div className={style.marquee_slider_box}>Time Saved</div>
                </div>
              </div>
            </div>

            <div className={style.p3}>
              <Link href="/check-regime">
                <button className={style.aibtn}>
                  {" "}
                  Check regime
                 
                </button>
              </Link>
            </div>
          </div>
          <div className={style.video}>
            <img
              src="https://cdn.prod.website-files.com/661ff9b7c00e059c1adbb000/66c6223655b9d557cff5e389_copilot_features.avif"
              alt=""
              className={style.imgLp}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LetplanSection;
