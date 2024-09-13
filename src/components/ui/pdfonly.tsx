import React, { useState, useEffect, useRef } from "react";
import style from "../../styles/regimeFrom/form.module.css";
import Spinner from "../ui/spinnerloder";
import toast from "react-hot-toast";
import Link from "next/link";

const PdfUploadForm = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileName, setPdfFileName] = useState("");
  const [pdfPassword, setPdfPassword] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);
  const [response, setResponse] = useState<any>();
  const [taxComparison, setTaxComparison] = useState<any>();
  const [grossIncome, setGrossIncome] = useState<any>(0);
  const [openManualEntry, setOpenManualEntry] = useState<boolean>(false);

  const [salary, setSalary] = useState("");
  const resultsRef = useRef<any>()

  const [manualEntryData, setManualEntryData] = useState({
    salary: "",
    exemptedHRA: "",
    healthInsurance: "",
    homeLoanInterest: "",
    donation: "",
    travelAllowance: "",
    epf: "",
    npsSelf: "",
    npsEmployer: "",
    otherDeductions: ""
  });

  const handleManualEntryChange = (e: any) => {
    const { name, value } = e.target;
    if (/^\d*\.?\d*$/.test(value)) {
      setManualEntryData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      setPdfFileName(file.name); // Update file name
    } else {
      setPdfFile(null);
      setPdfFileName(""); // Reset file name
      toast.error("Please upload a valid PDF file.");
    }
  };

  useEffect(()=> {
    if(pdfFile) setOpenManualEntry(false)
  }, [pdfFile])

  useEffect(()=> {
    console.log('manual entering data')
    if(Object.values(manualEntryData).some((val) => val.trim() !== "") && pdfFile) {
      setPdfFile(null)
      setGrossIncome(null)
    }
  }, [manualEntryData])

  useEffect(() => {
    console.log(manualEntryData, ' manualentryData')
    if (pdfFile || Object.values(manualEntryData).some((val) => val.trim() !== "")) { // ? all the fields are not required so will handle it later
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [pdfFile, manualEntryData]);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (pdfFile) {
        setShowSpinner(true);
        const formData = new FormData();
        formData.append("file", pdfFile);
        formData.append("password", pdfPassword);
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_TAXATION_API}`,
            {
              method: "POST",
              body: formData,
            }
          );

          const result = await response.json();
          if(response.status !== 200){
            console.log(' not 200')
            throw new Error(result.msg)
          }
          setResponse(response);
          setTaxComparison(result.tax_comparison);
          setGrossIncome(result.total_income);
          toast.success("File uploaded successfully");
          setTimeout(()=> {if(resultsRef.current) window.scrollTo({top: resultsRef.current.offsetTop, behavior: "smooth"})}, 800)
        } catch (error: any) {
          console.error(error);
          toast.error(error.message);
        } finally {
          setShowSpinner(false);
        }
    } else if (Object.values(manualEntryData).some((val) => val.trim() !== "")) {
      const manualData = {
        financial_year: "2024-25",
        age: 59,
        salary_income: manualEntryData.salary || 0,
        other_income: 0,
        deduction_10_13A: manualEntryData.exemptedHRA || 0,
        deduction_80_C: manualEntryData.epf || 0,
        deduction_80_D: manualEntryData.healthInsurance || 0,
        deduction_80_CCD_1B: manualEntryData.npsSelf || 0,
        deduction_80_CCD_2: manualEntryData.npsEmployer || 0,
        deduction_24_b: manualEntryData.homeLoanInterest || 0,
        deduction_80_G: manualEntryData.donation || 0,
        deduction_10_5: manualEntryData.travelAllowance || 0,
        deduction_any_other: manualEntryData.otherDeductions || 0,
      };

      try {
        const response = await fetch(String(process.env.NEXT_PUBLIC_OLD_VS_NEW_API), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(manualData),
        });
  
        const result = await response.json();
        console.log('result from oldvnew', result)
        if (response.status !== 200) {
          throw new Error(result.msg);
        }
        setResponse(response);
        setTaxComparison(result);
        toast.success("Data submitted successfully");
        setTimeout(()=> {if(resultsRef.current) window.scrollTo({top: resultsRef.current.offsetTop, behavior: "smooth"})}, 800)
      } catch (error: any) {
          console.error(error);
          toast.error(error.message);
      } finally{
        setShowSpinner(false)
      }
    }
  };

  return (
    <>
      {/* @ts-ignore */}
      <form onSubmit={handleSubmit} className={style.formdata}>
        <div className={style.containerform}>
          <h1 className={style.haeder + " text-center"}>Check which regime would be beneficial for you</h1>
          <section className={style.menufile}>
            <div className={style.input1}>
              <div className={style.uplodefile}>
                <input
                  type="file"
                  id="pdf-upload"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className={style.upload}
                  hidden
                />
                <div className={style.password_file}>
                <div className={style.input_file}>
                <label htmlFor="pdf-upload" className={style.fileuplode}>
                  <svg
                    width={10}
                    fill="#000000"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3.793V9H7V3.864L5.914 4.95 4.5 3.536 8.036 0l.707.707.707.707 2.121 2.122-1.414 1.414L9 3.793zM16 11v5H0v-5h2v3h12v-3h2z"
                      fillRule="evenodd"
                    ></path>{" "}
                  </svg>
                  <p className={style.uploadtext}>Upload Form 16</p>
                </label>
                {pdfFileName && <p className={style.fileName}>{pdfFileName}</p>}
                <input
                type="text"
                className={style.inputtext + " "}
                placeholder="Password (if any)"
                value={pdfPassword}
                onChange={(e) => setPdfPassword(e.target.value)}
              />
                </div>
                
                </div>
              </div>
             
            </div>

            {/* <div className={style.input2}>Or</div> */}

            <div className={style.btnsection}>
              <h2 className={style.haedertitle + " text-center"}>OR</h2>
              <span onClick={()=> setOpenManualEntry(p=> !p)} className="cursor-pointer bg-gray-100 px-3 py-2 rounded w-fit m-auto text-gray-800 outline-none focus:outline-none">Enter your details manually</span>
              {openManualEntry && (
                <div className={style.otherdeduction}>
                <div className={style.otherdeduction_row1}>
                  <input
                    type="text"
                    className={style.inputtext}
                    placeholder="Salary Income (Yearly)"
                    name="salary"
                    value={manualEntryData.salary}
                    onChange={handleManualEntryChange}
                  />
                  <input
                    type="text"
                    className={style.inputtext}
                    placeholder="Exempted HRA, 10(13A)"
                    name="exemptedHRA"
                    value={manualEntryData.exemptedHRA}
                    onChange={handleManualEntryChange}
                  />
                  <input
                    type="text"
                    className={style.inputtext}
                    placeholder="Health Insurance premium, 80D"
                    name="healthInsurance"
                    value={manualEntryData.healthInsurance}
                    onChange={handleManualEntryChange}
                  />
                  <input
                    type="text"
                    className={style.inputtext}
                    placeholder="Interest on home loan, 24(b)"
                    name="homeLoanInterest"
                    value={manualEntryData.homeLoanInterest}
                    onChange={handleManualEntryChange}
                  />
                  <input
                    type="text"
                    className={style.inputtext}
                    placeholder="Donation, 80G"
                    name="donation"
                    value={manualEntryData.donation}
                    onChange={handleManualEntryChange}
                  />
                  <input
                    type="text"
                    className={style.inputtext}
                    placeholder="Leave Travel Allowance, 10(5)"
                    name="travelAllowance"
                    value={manualEntryData.travelAllowance}
                    onChange={handleManualEntryChange}
                  />
                </div>
                <div className={style.otherdeduction_row1}>
                  <input
                    type="text"
                    className={style.inputtext}
                    placeholder="EPF, PPF, ELSS, School fees, Etc, 80C"
                    name="epf"
                    value={manualEntryData.epf}
                    onChange={handleManualEntryChange}
                  />
                  <input
                    type="text"
                    className={style.inputtext}
                    placeholder="NPS contribution - Self, 80CCD(1B)"
                    name="npsSelf"
                    value={manualEntryData.npsSelf}
                    onChange={handleManualEntryChange}
                  />
                  <input
                    type="text"
                    className={style.inputtext}
                    placeholder="NPS contribution - Employer, 80CCD (2)"
                    name="npsEmployer"
                    value={manualEntryData.npsEmployer}
                    onChange={handleManualEntryChange}
                  />
                  <input
                    type="text"
                    className={style.inputtext}
                    placeholder="Any Other Deduction"
                    name="otherDeductions"
                    value={manualEntryData.otherDeductions}
                    onChange={handleManualEntryChange}
                  />
                </div>
              </div>
              )}
            </div>
          </section>

          <button
            type="submit"
            disabled={isSubmitDisabled}
            className={`${style.frombtn} ${
              isSubmitDisabled ? style.disabled : style.enabled
            }`}
          >
            {showSpinner ? <Spinner /> : "Submit"}
          </button>
        </div>
        <div className="scrollToForResults" ref={resultsRef} ></div>
        {taxComparison && (
          <div className={style.tax_comparison}>
            <div className="text-gray-200 w-full flex flex-col gap-6 justify-center items-center">
              {/* <h2 className="text-3xl font-bold">Tax Comparison</h2> */}
              <h1 className={style.title}>Total Tax Payable</h1>
              <div className={style.flexcal}>
                {grossIncome && <div className="lg:flex gap-5">
                  <p className="text-gray-400 text-lg">
                    Your Gross Income : {grossIncome.toLocaleString("en-IN")}
                  </p>
                </div>}
                <div className="">
                  <h3 className="text-gray-400 text-xl">Tax payable under:</h3>
                  <h3 className="text-lg text-gray-100">
                    Old Regime :{" "}
                    {taxComparison.old_regime_tax.total_tax_payable.toLocaleString(
                      "en-IN"
                    )}
                  </h3>
                  <h3 className="text-lg text-gray-100">
                    New Regime :{" "}
                    {taxComparison.new_regime_tax.total_tax_payable.toLocaleString(
                      "en-IN"
                    )}
                  </h3>
                  {/* <h4>Choosing the {} would save you ₹{(Math.max(taxComparison.old_regime_tax.total_tax_payable, taxComparison.new_regime_tax.total_tax_payable)-Math.min(taxComparison.old_regime_tax.total_tax_payable, taxComparison.new_regime_tax.total_tax_payable)).toLocaleString('en-In')}</h4> */}
                </div>
              </div>
            </div>

            <div className={style.innerBorder}>
              <div className={style.table_tile}>Details on Calculation</div>
              <div className={style.table_container}>
                <div className={style.old_new_row}>
                  <div className={style.title_taxt_regime}>Particulars</div>
                  <div className={style.old_regime}>Old Regime</div>
                  <div className={style.new_regime}>New Regime</div>
                </div>
                <div className={style.old_new_row}>
                  <div className={style.title_taxt_regime}>Taxable Income</div>
                  <div
                    className={style.old_regime}
                    style={{ marginLeft: "-67px" }}
                  >
                    {taxComparison?.old_regime_tax.taxable_income.toLocaleString("en-IN")}
                  </div>
                  <div className={style.new_regime}>
                    {taxComparison?.new_regime_tax.taxable_income.toLocaleString("en-IN")}
                  </div>
                </div>
                <div className={style.old_new_row}>
                  <div className={style.title_taxt_regime}>
                    Income Tax Payable
                  </div>
                  <div
                    className={style.old_regime}
                    style={{ marginLeft: "-120px" }}
                  >
                    {taxComparison?.old_regime_tax.tax_payable.toLocaleString("en-IN")}
                  </div>
                  <div className={style.new_regime}>
                    {taxComparison?.new_regime_tax.tax_payable.toLocaleString("en-IN")}
                  </div>
                </div>
                <div className={style.old_new_row}>
                  <div className={style.title_taxt_regime}>Less: Rebate</div>
                  <div
                    className={style.old_regime}
                    style={{ marginLeft: "-148px" }}
                  >
                    {taxComparison?.old_regime_tax.tax_after_rebate.toLocaleString("en-IN")}
                  </div>
                  <div className={style.new_regime}>
                    {taxComparison?.new_regime_tax.tax_after_rebate.toLocaleString("en-IN")}
                  </div>
                </div>
                <div className={style.old_new_row}>
                  <div className={style.title_taxt_regime}>Surcharge</div>
                  <div
                    className={style.old_regime}
                    style={{ marginLeft: "-135px" }}
                  >
                    {taxComparison?.old_regime_tax.surcharge.toLocaleString("en-IN")}
                  </div>
                  <div className={style.new_regime}>
                    {taxComparison?.new_regime_tax.surcharge.toLocaleString("en-IN")}
                  </div>
                </div>
                <div className={style.old_new_row}>
                  <div className={style.title_taxt_regime}>
                    Health and Education Cess
                  </div>
                  <div
                    className={style.old_regime}
                    style={{ marginLeft: "-171px" }}
                  >
                    {taxComparison?.old_regime_tax.health_and_edu_cess.toLocaleString("en-IN")}
                  </div>
                  <div className={style.new_regime}>
                    {taxComparison?.new_regime_tax.health_and_edu_cess.toLocaleString("en-IN")}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/chat?query=elaborate-more-about-tax-regimes"
              className="px-4 py-2 rounded text-white bg-zinc-700 w-fit"
            >
              Got more questions? Ask AI
            </Link>
          </div>
        )}
      </form>
      {/* end  */}
    </>
  );
};

export default PdfUploadForm;
