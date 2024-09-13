import React from "react";
import style from "../../styles/spineer.module.css"; // Replace with your spinner styles

const Spinner = () => {
  return (
    <div className={style.spinner}>
      <div className={style.loader}></div>
    </div>
  );
};

export default Spinner;
