import Navbar_sec from "@/sections/HomeSection/Navbar_sec";
import PdfUploadForm from "../components/ui/pdfonly";
import style from "../styles/regimeFrom/form.module.css";


const HomePage = () => {
  return (
    <>
     <div className="container_check">
     <PdfUploadForm/>
     </div>
    </>
  );
};

export default HomePage;
