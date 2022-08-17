import React, { useEffect, useState } from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./MomentPicSlide.css";

import img1 from "./life_events/1.JPG";
import img2 from "./life_events/2.jpg";
import img3 from "./life_events/3.jpg";
import img4 from "./life_events/4.JPG";
import img5 from "./life_events/5.JPG";
import img6 from "./life_events/6.JPG";
import img7 from "./life_events/7.jpg";
import img8 from "./life_events/8.jpg";
import img9 from "./life_events/9.JPG";
import img10 from "./life_events/10.JPG";
import img11 from "./life_events/11.jpg";
import img12 from "./life_events/12.JPG";
import img13 from "./life_events/13.JPG";
import img14 from "./life_events/14.jpg";
import img15 from "./life_events/15.jpg";
import img16 from "./life_events/16.jpg";
import img17 from "./life_events/17.jpg";
import img18 from "./life_events/18.jpeg";
import img19 from "./life_events/19.jpeg";
import img20 from "./life_events/20.jpeg";
import img25 from "./life_events/25.jpg";
import img26 from "./life_events/26.jpg";
import img27 from "./life_events/27.jpg";
import img33 from "./life_events/33.jpg";
import img34 from "./life_events/34.JPG";
import img35 from "./life_events/35.JPG";
import img36 from "./life_events/36.jpg";
import img37 from "./life_events/37.JPG";

SwiperCore.use([EffectCoverflow, Pagination]);

const img_lst = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img25,
  img26,
  img27,
  img33,
  img34,
  img35,
  img36,
  img37,
];
const desc_lst = [
  "Indoor Games Card Champions, 2019",
  "Graduation Farewell Form CSE Department, 2022",
  "Graduation Farewell, 2022",
  "Annual Sports, 2018",
  "Annual Sports, 2018",
  "Annual Sports Prize Giving Ceremony, 2018",
  "Annual Sports, 2019",
  "Inter Batch Football Champion, 2022",
  "Bitfest Volunteer, 2019",
  "Bitfest Volunteer, 2019",
  "Bitfest Volunteer, 2019",
  "Shylet Tour, 2018",
  "Barisal Tour, 2018",
  "Kuakata Tour, 2017",
  "Sundarban Tour, 2018",
  "Sundarban Tour, 2018",
  "Rag Tour: Sajek, 2021",
  "Rag Tour: Sajek, 2021",
  "Rag Tour: Saint Martin, 2021",
  "Rag Tour: Saint Martin, 2021",
  "Pohela Baishakh, 2017",
  "Thesis Defense, 2022",
  "Farewell From HACK, KUET, 2022",
  "Last Class of College, 2016",
  "Inter Department Football Tournament, 2017",
  "Inter Department Football Tournament, 2017",
  "Inter Department Football Tournament, 2017",
  "Inter Hall Football Tournament, 2019",
];
const MomentPicSlide = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width > breakpoint) {
    let bool_width = true;
  } else {
    let bool_width = false;
  }

  return (
    <>
      <section>
        <div className="moment_pic">
          <div className="life_event">
            <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-gallery-seo-flatart-icons-lineal-color-flatarticons.png" />
            <h1>Most Memorable Moments... </h1>
          </div>
          <div>
            <div>
              <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                rebuildOnUpdate={true}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
                centeredSlides={true}
                autoplay={{
                  delay: 2300,
                  disableOnInteraction: false,
                }}
                // className="mySwiper"
              >
                {img_lst.map((val, i) => {
                  const desc = desc_lst[i];
                  return (
                    <SwiperSlide className="slider_part">
                      <div className="flex">
                        <img src={val} alt={i} />
                        <div>
                          <h1>{desc}</h1>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MomentPicSlide;
