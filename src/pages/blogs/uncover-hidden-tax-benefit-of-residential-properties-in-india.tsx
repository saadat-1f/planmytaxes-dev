import React from "react";
import style from "../../styles/blogs/uncoverHiddentax.module.css";

import Link from "next/link";
import Navbar_sec from "@/sections/HomeSection/Navbar_sec";

const index = () => {
  return (
    <>
      {/* header  */}
      <div className={style.blogsConatine}>
        
    
        <div className={style.mainContainer}>
          <div className={style.heroSection}>
            <h1 className={style.title}>
              Uncover Hidden Tax Benefits of Residential Properties in India
            </h1>
          </div>
        </div>
      </div>
      {/* close  */}

      <div className={style.blogabout}>
        <div className={style.innerblogssection}>
       
        <p className={style.paragraph}>
          Did you know that your residential property can be a powerful tool for
          tax savings? Many taxpayers in India are unaware of the multitude of
          tax benefits available when renting, owning, or sometimes even while
          buying a house. These benefits can significantly reduce your tax
          liability and improve your financial well-being. In this blog, we'll
          delve into the lesser-known tax advantages associated with residential
          properties. From House Rent Allowance (HRA) to home loan deductions
          and capital gains exemptions, we’ll break down these benefits with
          clear examples and practical tips. Let's unlock the full potential of
          your home in optimizing your tax savings.
        </p>
        </div>
        <h3 className={style.bloginnerTitle}>
          1. Tax Benefits of Renting a House
        </h3>
        <p className={style.paragraph}>
          <span className={style.blodSubheader}>
            House Rent Allowance (HRA):
          </span>{" "}
          For salaried individuals, HRA is a crucial component of the salary
          package that offers significant tax relief. Many people overlook the
          fact that HRA can be partially or fully exempt from taxes under
          Section 10(13A) of the Income Tax Act, subject to certain conditions.
        </p>
        <p className={style.paragraph}>
          <span className={style.blodSubheader}>
            Calculation of HRA Exemption:{" "}
          </span>
          The least of the following amounts is exempt from tax:
        </p>
        <ul className={style.list}>
          <li>Actual HRA received </li>
          <li>
            50% of salary (basic salary + DA) if living in a metro city (40% if
            in a non-metro city)
          </li>
          <li>Rent paid minus 10% of salary</li>
        </ul>
        <p className={style.paragraph}>
          <span className={style.blodSubheader}>Example:</span> Let's take Mr.
          Sharma, who lives in Mumbai, earns a basic salary of ₹50,000 per
          month, receives ₹20,000 as HRA, and pays ₹15,000 as rent.
        </p>
        
        <ul className={style.list}>
          <li>Actual HRA received: ₹20,000</li>
          <li>50% of salary: ₹25,000 (50% of ₹50,000)</li>
          <li>Rent paid - 10% of salary: ₹15,000 - ₹5,000 = ₹10,000</li>
        </ul>
        <p className={style.paragraph}>
          The least of the above amounts is ₹10,000, so Mr. Sharma can claim
          ₹10,000 per month as HRA exemption, reducing his taxable income by
          ₹1,20,000 annually.
        </p>
        <p className={style.paragraph}>
          For calculation of HRA, you do not need to remember these formulas.
          Many calculators are available on the internet that can help you with
          this calculation. Listing down of the popular and easy to use HRA
          exemption calculators
        </p>

        <ul className={style.list}>
          <li>
            <Link
              className="default_link"
              href="https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/hra-exemption-calculator.html"
            >
              ICICI Prudential HRA exemption calculator
            </Link>
          </li>
          <li>
            <Link
              className="default_link"
              href="https://1finance.co.in/calculator/hra-exemption"
            >
              1 Finance HRA exemption calculator
            </Link>
          </li>
          <li>
            <Link
              className="default_link"
              href="https://www.zoho.com/in/payroll/hra-exemption-calculator/"
            >
              Zoho books HRA exemption calculator
            </Link>
          </li>
          <li>
            <Link
              className="default_link"
              href="https://www.etmoney.com/tools-and-calculators/hra-calculator"
            >
              ET Money HRA exemption calculator
            </Link>
          </li>
        </ul>

        <h3 className={style.bloginnerTitle}>
          2. Tax Benefits of Owning a House
        </h3>
        <p className={style.paragraph}>
          Owning a house comes with its own set of tax advantages, primarily
          through deductions on home loan repayments and interest thereon.
          Understanding these benefits can help you maximize your tax savings.
        </p>
        <h4 className={style.blodSubheader}>Deductions on Home Loan:</h4>
        <ul className={style.list}>
          <li>
            <span className={style.blodSubheader}>Section 24(b):</span> Interest
            paid on home loans is deductible up to ₹2 lakhs per annum for
            self-occupied property. For a rented property, there is no upper
            limit on the deduction.
          </li>
          <li>
            <span className={style.blodSubheader}>Section 80C:</span> Principal
            repayment of home loans is deductible up to ₹1.5 lakhs per annum.
          </li>
          <li>
            <span className={style.blodSubheader}>Section 80EE/80EEA:</span>{" "}
            Additional deduction of up to ₹50,000 under Section 80EE and up to
            ₹1.5 lakhs under Section 80EEA for first-time home buyers, subject
            to certain conditions and based on the year of purchase.
          </li>
        </ul>
        <p className={style.paragraph}>
          Example: Consider Ms. Mehta, who has taken a home loan and paid ₹1.8
          lakhs as interest and ₹1.2 lakhs as principal repayment in a year.
        </p>
        <ul className={style.list}>
          <li>
            Under Section 24(b), she can claim ₹1.8 lakhs as a deduction for
            interest paid.
          </li>
          <li>
            Under Section 80C, she can claim ₹1.2 lakhs as a deduction for
            principal repayment.
          </li>
        </ul>
        <p className={style.paragraph}>
          If she qualifies under Section 80EEA, she can claim an additional ₹1.5
          lakhs, making her total deductions significantly higher.
        </p>

        <h3 className={style.bloginnerTitle}>
          3. Capital Gains Exemptions on Buying a New House
        </h3>
        <p className={style.paragraph}>
          <span className={style.blodSubheader}>Section 54:</span> If you sell a
          residential property and reinvest the capital gains in a new
          residential house within 2 years of the sale or construct a new house
          within 3 years, you can claim exemption on the Long Term Capital Gains
          (LTCG). This is a valuable benefit many people are not fully aware of.
        </p>
        <p className={style.paragraph}>
          Example: Mr. Kumar sells his house for ₹70 lakhs, resulting in LTCG of
          ₹20 lakhs. If he buys a new house for ₹50 lakhs within the stipulated
          period:
        </p>
        <ul className={style.list}>
          <li>
            The entire ₹20 lakhs of LTCG can be exempted under Section 54,
            provided the new house is bought or constructed within the specified
            period.
          </li>
        </ul>
        <p className={style.paragraph}>
          <span className={style.blodSubheader}>Section 54F:</span> This section
          provides exemption on LTCG from the sale of any asset other than a
          residential house, if the net sale consideration is used to buy a new
          residential house.
        </p>
        <p className={style.paragraph}>
          Example: Mrs. Verma sells some Mutual Funds, which she was investing
          for the purpose of buying a house, for ₹60 lakhs where she gets a LTCG
          of ₹25 lakhs. If she buys a new residential house for ₹60 lakhs:
        </p>
        <ul className={style.list}>
          <li>
            The entire ₹25 lakhs of LTCG can be exempted under Section 54F,
            provided she does not own more than one residential house (other
            than the new one) on the date of sale.
          </li>
        </ul>

        <h3 className={style.bloginnerTitle}>Conclusion</h3>
        <p className={style.paragraph}>
          Understanding and leveraging the tax benefits associated with
          residential properties can lead to substantial savings. Whether you're
          renting, owning, or reinvesting in a new house, being aware of the
          available exemptions and deductions can help you make more informed
          financial decisions.
        </p>
        <p className={style.paragraph}>
          Always consult with a tax professional to ensure you're fully
          compliant and maximizing your tax benefits.
        </p>
      </div>
    </>
  );
};

export default index;
