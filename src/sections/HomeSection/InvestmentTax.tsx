import React from "react";
import style from "../../styles/Homepg/investment.module.css";
import Link from "next/link";

const InvestmentTax = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.col1}>
          <div className={style.header}>
            Knowledge hub
            <p className={style.planPra}>
              70% of users don’t plan their taxes & lose amount annually here AI
              Assistant will help you.
            </p>
          </div>
          <button className={style.view_more}>View more</button>

          {/* </div> */}
        </div>
        {/* flax  */}
        <div className={style.inverstmetDetail}>
          <div className={style.investmentplan1}>
            <Link href="/blogs/uncover-hidden-tax-benefit-of-residential-properties-in-india">
              <div className={style.investmentbox1}>
                <img
                  src="https://cdn.prod.website-files.com/661ff9b7c00e059c1adbb000/66c320c6d92156f5e16a8cd8_embed_bot-p-800.png"
                  alt=""
                />
                Uncover Hidden Tax Benefits of Residential Properties in India
              </div>
            </Link>
            <Link href="https://1finance.co.in/blog/whats-the-difference-between-tds-and-tcs-explained-simply/">
              {" "}
              <div className={style.investmentbox1}>
                <img
                  src="https://cdn.prod.website-files.com/661ff9b7c00e059c1adbb000/66c320c6d92156f5e16a8cd8_embed_bot-p-800.png"
                  alt=""
                />
                What’s the Difference Between TDS and TCS? Explained Simply!
              </div>
            </Link>
            <Link href="https://1finance.co.in/blog/how-to-choose-the-correct-itr-form-a-guide-to-choosing-the-right-income-tax-return-form/">
              <div className={style.investmentbox1}>
                <img
                  src="https://cdn.prod.website-files.com/661ff9b7c00e059c1adbb000/66c320c6d92156f5e16a8cd8_embed_bot-p-800.png"
                  alt=""
                />
                How to Choose the Correct ITR Form
              </div>
            </Link>
          </div>
          {/* <div className={style.investmentplan2}>
            <img src="/palning.png" alt="" className={style.planimg} />
          </div> */}
          <div className={style.investmentplan1}>
            <Link href="/blogs/key-income-tax-considerations-to-keep-in-mind-while-switching-jobs">
              {" "}
              <div className={style.investmentbox1}>
                <img
                  src="https://cdn.prod.website-files.com/661ff9b7c00e059c1adbb000/66c320c6d92156f5e16a8cd8_embed_bot-p-800.png"
                  alt=""
                />
                Switching Jobs? Key Income Tax Considerations to Keep in Mind
              </div>
            </Link>
            <Link href="https://1finance.co.in/blog/tax-filing-understanding-key-terminologies/">
              {" "}
              <div className={style.investmentbox1}>
                <img
                  src="https://cdn.prod.website-files.com/661ff9b7c00e059c1adbb000/66c320c6d92156f5e16a8cd8_embed_bot-p-800.png"
                  alt=""
                />
                Tax Filing: Understanding Key Terminologies
              </div>
            </Link>
            <Link href="https://1finance.co.in/blog/how-can-you-maximize-tax-savings-unveiling-section-80c-80ccc-80ccd-and-80d-deductions/">
              {" "}
              <div className={style.investmentbox1}>
                <img
                  src="https://cdn.prod.website-files.com/661ff9b7c00e059c1adbb000/66c320c6d92156f5e16a8cd8_embed_bot-p-800.png"
                  alt=""
                />
                How to Claim Deductions While Filing Your Taxes?
              </div>
            </Link>
          </div>
          <div className={style.getintouch}>
            <h1 className={style.title_getintouch}>
              Get answers to all your tax questions
            </h1>
            <Link href="/chat">
              {" "}
              <button className={style.aibtn}>Try out all new AI</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentTax;
