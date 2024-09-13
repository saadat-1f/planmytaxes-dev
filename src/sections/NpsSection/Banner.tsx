import React from 'react'
import style from "../../styles/NpsSection/bananer.module.css"

const Banner = () => {
  return (
    <div className={style.banner}>
        <div className={style.text1}>
          <div className={style.p1}>
         Nps Investment
          </div>
          {/* <div className={style.p3}>
            <button className={style.aibtn}>AI Will Assist you</button>
          </div> */}
        </div>
    </div>
  )
}

export default Banner