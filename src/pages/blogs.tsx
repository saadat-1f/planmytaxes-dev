import Link from "next/link";
import React from "react";
import style from "../styles/blogs/blogs.module.css";
import Navbar_sec from "@/sections/HomeSection/Navbar_sec";

const blogs = () => {
  return (
    <>
      <div className={style.container_wrap}>
        <div className={style.header_content_blog}>
          {/* <h1 className={style.plantaxes_logo}>Blogs</h1> */}
          <h6 className={style.plantaxe_blogs_title}>PlanmyTax Blogs</h6>
          <h1 className={style.plantaxe_logo}>The ultimate tax resource
          </h1>
          <div className={style.our_blog_banner}>
            <div className={style.blogsimges}>
              <img className={style.blogImg1} src="/blogimg1.jpg" alt="" />
              <div className={style.blogs_wraper}>
              <h3 className={style.card_title}>What is PlanMyTax and how can it help me?</h3>
              <p className={style.card_title_p}>
                Which toil and pain can procure him some great pleasure. To take
                a trivial example, which of us ever undertakes lab Which toil
                and pain can procure him some great pleasure. To take a trivial
                example, which of us ever undertakes lab Which toil and pain can
                procure him some great pleasure. To take a trivia l example,
                which of us ever undertakes lab.
              </p>
              </div>
            </div>
            <div className={style.blogs_right_col}>
            <div className={style.text_wrap}>
              <h2 className={style.blogTittle}>
                How to Choose the Correct ITR Form: A Guide to Choosing the
                Right Income Tax Return Form
              </h2>
              <p className={style.blog_header_title}>
                As the tax season approaches, one of the most crucial decisions
                taxpayers face is selecting the appropriate Income Tax Return
                (ITR) form. The choice of ITR form can have a significant impact
                on the accuracy and efficiency of your tax filing process. In
                this comprehensive blog, we will guide you through the various
                ITR forms and help you determine the one that best suits your
                financial situation.
              </p>
            </div>
            <div className={style.line}></div>
            <div className={style.text_wrap}>
              <h2 className={style.blogTittle}>
                How to Choose the Correct ITR Form: A Guide to Choosing the
                Right Income Tax Return Form
              </h2>
              <p className={style.blog_header_title}>
                As the tax season approaches, one of the most crucial decisions
                taxpayers face is selecting the appropriate Income Tax Return
                (ITR) form. The choice of ITR form can have a significant impact
                on the accuracy and efficiency of your tax filing process. In
                this comprehensive blog, we will guide you through the various
                ITR forms and help you determine the one that best suits your
                financial situation.
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className={style.flex_conatiner_cards}>
          {/* flax_column1 */}
          <div className={style.mainContainer}>
           
            {/* tax blogs------------------------------------ */}
            <div className={style.herosection}>
              <div className={style.col2section}>
                <img className={style.Img1} src="/hiddentax.jpg" alt="" />
              </div>
              <div className={style.col1section}>
                <h2 className={style.blogTittle}>
                  Uncover Hidden Tax Benefits of Residential Properties in India
                </h2>
                <p className={style.paragraph}>
                  Did you know that your residential property can be a powerful
                  tool for tax savings? Many taxpayers in India are unaware of
                  the multitude of tax benefits available when renting, owning,
                  or sometimes even while buying a house. These benefits can
                  significantly reduce your tax liability and improve your
                  financial well-being.
                </p>
                <Link href="/blogs/uncover-hidden-tax-benefit-of-residential-properties-in-india">
                  <button className={style.readmore}>
                    <h3>Read more...</h3>
                  </button>
                </Link>
              </div>
            </div>

            <div className={style.herosection}>
              <div className={style.col2section}>
                <img className={style.Img1} src="/keyblogimg4.jpg" alt="" />
              </div>
              <div className={style.col1section}>
                <h2 className={style.blogTittle}>
                  Switching Jobs? Key Income Tax Considerations to Keep in Mind
                </h2>
                <p className={style.paragraph}>
                  Changing jobs can be an exciting and pivotal moment in your
                  career, but it also comes with a set of financial implications
                  that you need to be aware of. One of the most crucial aspects
                  to consider is how your change in employment will affect your
                  income tax. People have faced severe consequences, including
                  last minute tax payments of lakhs of rupees, affecting them
                  financially as well as emotionally...
                </p>
                <Link href="/blogs/key-income-tax-considerations-to-keep-in-mind-while-switching-jobs">
                  <button className={style.readmore}>
                    <h3>Read more...</h3>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className={style.fixed}>
            <div className={style.sticky_aibox}>
              <h1 className={style.sticky_title}>
                Get Free Advice from Our Tax Expert Assisted Tax Filing
              </h1>
              <Link href="/chat">
                {" "}
                <button className={style.aiasst}>
                  <h3> Try out all new AI </h3>
                </button>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default blogs;
