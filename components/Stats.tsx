"use client";

import CountUp from "react-countup";

import { statList } from "@/constants";

export const Stats = () => {
  return (
    <ul className="flex flex-wrap gap-8 max-w-[80vw] xl:max-w-none mx-auto">
      {statList.map(({ num, text }, index) => (
        <li
          key={index}
          className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
        >
          <CountUp
            end={num}
            duration={5}
            className="text-4xl xl:text-6xl font-extrabold"
          />
          <p
            className={`${
              text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
            } leading-snug text-white/80`}
          >
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
};
