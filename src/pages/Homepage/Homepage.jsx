import React, { useEffect, useRef } from "react";
import { techStacks } from "../../data/homeData";
import { herodevices02 } from "../../sources";
import styles from "./homepage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
// import LocomotiveScroll from "locomotive-scroll";

const projectArr = [
  {
    img: "https://via.placeholder.com/400x400/FF260B/FF260B",
  },
  {
    img: "https://via.placeholder.com/400x400/000/000",
  },
  {
    img: "https://via.placeholder.com/400x400/fff/fff",
  },
];

const Homepage = () => {
  const scrollRef = useRef(null);

  const projectList = projectArr.map((item, i) => {
    return (
      <SwiperSlide key={i}>
        <div className={styles.project_box}>
          <img src={item.img} alt="project" className={styles.project_img} />
        </div>
      </SwiperSlide>
    );
  });

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     getSpeed: true,
  //     getDirection: true,
  //     multiplier: 0.4, // Adjust the scroll speed here
  //   });

  //   setTimeout(() => {
  //     scroll.update(); // Update scroll calculations
  //   }, 100);
  //   scroll.update(); // Manually update the scroll height

  //   return () => {
  //     scroll.destroy(); // Clean up Locomotive Scroll instance
  //   };
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div ref={scrollRef}>
        <section className={styles.home_sec1}>
          <div className="my_container">
            <div className={styles.text_container}>
              <h1 className={styles.heading}>Web Developer & Mentor</h1>
              <p className={styles.description}>
                Navigating the web with a heart full of code and a mind brimming
                with innovation, and guiding the next generation with passion
                and code.
              </p>
            </div>
            <div className={styles.img_wrapper}>
              <img
                src={herodevices02}
                alt="hero devices"
                className={styles.hero_img}
              />
            </div>
          </div>
        </section>

        <section className={`home_sec2 ${styles.home_sec2}`}>
          <div className="my_container">
            <div className={styles.text_container}>
              <h2 className={styles.heading}>
                Hey there, I'm Talha – your web wizard.
              </h2>
              <p className={styles.description}>
                I've been in the coding game for 2 years now, juggling full-time
                work and weekend freelance projects. I'm captivated by
                fascinating designs and user-friendly functionality. If you've
                got artistic concepts or app dreams, let's bring them to life
                together.
              </p>
              <div className={styles.projects_wrapper}>
                <Swiper
                  modules={[Navigation, Autoplay, Pagination]}
                  navigation={{
                    prevEl: ".home_sec2 .arrowleft",
                    nextEl: ".home_sec2 .arrowright",
                  }}
                  slidesPerView={3}
                  spaceBetween={30}
                  grabCursor={true}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                  }}
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {projectList}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <div className="my_container">
          <section className={styles.home_sec3}>
            <div className={styles.text_container}>
              <h2 className={styles.heading}>Tech Stack</h2>
            </div>
            <div className={styles.tech_stack_wrap}>
              <div className={`row ${styles.row}`}>
                {techStacks.map(({ title, id, stack, icon }) => (
                  <div className="col-md-6 col-lg-4" key={id}>
                    {/* <div className={styles.stack_category}>
                      <img
                        title={title}
                        src={icon}
                        width={50}
                        alt={title}
                        className={styles.category_icon}
                      />
                      <h2 className={styles.subheading}>{title}</h2>
                    </div> */}
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
        {/* <div className="my_container">
          <img height={300} src="" alt="" className="blank" />
        </div> */}
        <div className="my_container"></div>
        <div className="my_container"></div>
      </div>
    </>
  );
};

export default Homepage;
