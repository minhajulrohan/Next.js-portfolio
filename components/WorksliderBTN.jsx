"use client"

import { useSwiper } from 'swiper/react';
import { PiCaretLeftLight, PiCaretRightThin } from "react-icons/pi";

const WorksliderBTN = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftLight className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightThin className={iconStyles} />
      </button>
    </div>
  );
}

export default WorksliderBTN;
