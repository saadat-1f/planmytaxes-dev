import React, { useEffect, useState } from 'react'
import styles from "@/styles/componentstyles/networkloader.module.css"

const NetworkLoader: React.FC<{ titles: string[], customClass: string }> = ({ titles, customClass }) => {
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [isVisible, setIsVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
      const interval = setInterval(() => {
          setIsVisible(false);
          setTimeout(() => {
              const nextIndex = (index + 1) % titles.length;
              setCurrentTitle(titles[nextIndex]);
              setIndex(nextIndex);
              setIsVisible(true);
          }, 500);
      }, 2000);

      return () => clearInterval(interval); 
  }, [titles, index]);

  return (
      <div className={`${styles.container} ${customClass}`}>
          <div className={styles.loading_wave}>
              <div className={styles.loading_bar}></div>
              <div className={styles.loading_bar}></div>
              <div className={styles.loading_bar}></div>
              <div className={styles.loading_bar}></div>
          </div>
          <p className={`bg-zinc-900 px-3 py-1 rounded transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {currentTitle}
          </p>
      </div>
  );
};

export default NetworkLoader