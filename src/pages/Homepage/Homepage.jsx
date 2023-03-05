import React from "react";
import { herodevices } from "../../sources";
import styles from "./homepage.module.scss";

const Homepage = () => {
  return (
    <section className={styles.home_sec1}>
      <div className="my_container">
        <div className={styles.text_container}>
          <h1 className={styles.heading}>
            Frontend Developer, Consultant & Mentor
          </h1>
          <p className={styles.description}>
            I do deep analyse, make strategy, develop and code pixel perfect and
            highly responsive websites, and I love what I do.
          </p>
        </div>
        <div className={styles.img_wrapper}>
          <img
            src={herodevices}
            alt="hero devices"
            className={styles.hero_img}
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
