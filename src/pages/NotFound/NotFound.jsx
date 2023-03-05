import React, { useEffect } from "react";
import styles from "./notfound.module.scss";
import MetaDecorator from "../../components/MetaDecorator/MetaDecorator";
import { homeURL } from "../../helpers/paths";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className={styles.notfound_sec1}>
        <div className="my_container">
          <div className={styles.flex_box}>
            <h1 className={styles.title}>404</h1>
            <h5 className={styles.subtitle}>PAGE NOT FOUND</h5>
            <h6 className={styles.desc}>
              Sorry, the page you're looking for doesn't exist.
            </h6>
            <h6 className={styles.cta_wrapper}>
              Go back to <a href={homeURL}>Home</a>.
            </h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
