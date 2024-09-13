import React from "react";
import style from "../../styles/regimeFrom/form.module.css"; // Replace with your alert styles
// @ts-ignore
const Alert = ({ message, onClose }) => {
  return (
    <div className={style.alert}>
      <span className={style.closebtn} onClick={onClose}>&times;</span>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
