import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accodian";
import React from "react";
import style from "../../styles/Homepg/faq.module.css";

const FaqSection = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className={style.faquestion1}>
            What is the last date to file income tax returns in India?
          </AccordionTrigger>
          <AccordionContent className={style.answer}>
            The standard deadline for filing individual income tax returns is
            July 31st of the assessment year, unless extended by the government.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className={style.faquestion1}>
            {" "}
            How can I check my income tax refund status?
          </AccordionTrigger>
          <AccordionContent  className={style.answer}>
            You can check your income tax refund status online through the
            Income Tax Department's e-filing portal or the NSDL website using
            your PAN and the relevant assessment year.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className={style.faquestion1}>
            {" "}
            What is the difference between the old and new tax regimes?
          </AccordionTrigger>
          <AccordionContent className={style.answer}>
            The old tax regime allows various deductions and exemptions. In
            contrast, the new regime offers lower tax rates but forgoes most of
            these deductions and exemptions, including Section 80C, HRA, and
            LTA.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className={style.faquestion1}>
            Are there any deductions available for investments under Section
            80C?
          </AccordionTrigger>
          <AccordionContent className={style.answer}>
            Yes, investments in instruments like PPF, ELSS, NSC, 5-year FDs, and
            expenses like life insurance premiums and children's tuition fees
            are eligible for deductions up to ₹1.5 lakh under Section 80C
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className={style.faquestion1}>
            {" "}
            Can I claim tax benefits on home loan interest and principal
            repayment?
          </AccordionTrigger>
          <AccordionContent className={style.answer}>
            Yes, the interest on a home loan is deductible under Section 24, and
            the principal repayment is eligible for deduction under Section 80C.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className={style.faquestion1}>
            {" "}
            How do I rectify a mistake made in my income tax return after
            filing?
          </AccordionTrigger>
          <AccordionContent className={style.answer}>
            You can file a revised return on the e-filing portal of the Income
            Tax Department before the end of the relevant assessment year or
            before the completion of the assessment, whichever is earlier.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className={style.faquestion1}>
            {" "}
            What are the consequences of not filing income tax returns?
          </AccordionTrigger>
          <AccordionContent className={style.answer}>
            Not filing ITR can lead to penalties, interest on due taxes, and
            potential legal consequences. It's important to file ITR if your
            income exceeds the basic exemption limit.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FaqSection;
