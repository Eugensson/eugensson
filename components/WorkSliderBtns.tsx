"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export const WorkSliderBtns = () => {
  const swiper = useSwiper();

  return (
    <ul className="flex  items-center gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full xl:w-max justify-between xl:justify-none">
      <li className="">
        <button
          type="button"
          onClick={() => swiper.slidePrev()}
          className="w-[44px] h-[44px] flex justify-center items-center bg-accent hover:bg-accent-hover text-primary text-[22px] transition-all"
        >
          <PiCaretLeftBold />
        </button>
      </li>
      <li className="">
        <button
          type="button"
          onClick={() => swiper.slideNext()}
          className="w-[44px] h-[44px] flex justify-center items-center bg-accent hover:bg-accent-hover text-primary text-[22px] transition-all"
        >
          <PiCaretRightBold />
        </button>
      </li>
    </ul>
  );
};
