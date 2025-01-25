import React from "react";
import style from "./Homepagev2.module.scss";
import { images } from "../../sources";

const Homepagev2 = () => {
  return (
    <>
      <section className={style.home_v2_sec1}>
        <div className="my_container">
          <div className="row">
            <div className="col-md-8">
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
              <h1>Hello World!</h1>
            </div>
            <div className="col-md-4">
              <img
                src={images.talhaasre.image}
                alt={images.talhaasre.alt}
                className={style.profile_picture}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepagev2;
