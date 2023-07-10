import React, { useEffect, useRef } from "react";
import { techStacks } from "../../data/homeData";
import { herodevices } from "../../sources";
import styles from "./homepage.module.scss";
import LocomotiveScroll from "locomotive-scroll";

const Homepage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      getSpeed: true,
      getDirection: true,
      multiplier: 0.4, // Adjust the scroll speed here
    });

    setTimeout(() => {
      scroll.update(); // Update scroll calculations
    }, 100);
    scroll.update(); // Manually update the scroll height

    return () => {
      scroll.destroy(); // Clean up Locomotive Scroll instance
    };
  }, []);

  return (
    <>
      <div ref={scrollRef} data-scroll-container>
        <section className={styles.home_sec1} data-scroll-section>
          <div className="my_container">
            <div className={styles.text_container}>
              <h1 className={styles.heading}>Web Developer</h1>
              <p className={styles.description}>
                I code beautifully simple things, and I love what I do.
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

        <section className={styles.home_sec2} data-scroll-section>
          <div className="my_container">
            <div className={styles.text_container}>
              <h2 className={styles.heading}>
                Hi, I’m Talha. Nice to meet you.
              </h2>
              <p className={styles.description}>
                I started my coding journey almost 2 years ago and now I'm
                working full time and doing freelance projects on the weekends
                for my friends. I'm obsessed with unique, interesting design and
                user-friendly functionality so hit me up with your weird
                artistic project ideas or app proposals.
              </p>
            </div>
          </div>
        </section>

        <div className="my_container" data-scroll-section>
          <section className={styles.home_sec3}>
            <div className={styles.text_container}>
              <h2 className={styles.heading}>Things I enjoy and use</h2>
            </div>
            <div className={styles.tech_stack_wrap}>
              <div className={`row ${styles.row}`}>
                {techStacks.map(({ title, id, stack, icon }) => (
                  <div className="col-md-6 col-lg-4" key={id}>
                    <div className={styles.stack_category}>
                      <img
                        title={title}
                        src={icon}
                        width={50}
                        alt={title}
                        className={styles.category_icon}
                      />
                      <h2 className={styles.subheading}>{title}</h2>
                    </div>
                    <ul className={styles.icons_flex}>
                      {stack?.map((item, i) => (
                        <li
                          title={item.title}
                          className={styles.list_item}
                          key={item.id}
                        >
                          <img
                            src={item.img}
                            width={50}
                            alt={item.title}
                            className={styles.tech_icon}
                          />
                          <p className={styles.title}>{item.title}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="my_container" data-scroll-section>
          <img height={300} src="" alt="" className="blank" />
        </div>
        <div className="my_container" data-scroll-section></div>
        <div className="my_container" data-scroll-section></div>
      </div>
    </>
  );
};

export default Homepage;
