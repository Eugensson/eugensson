"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

import { serviceList } from "@/constants";

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="grid md:grid-cols-2 gap-[60px]"
      >
        {serviceList.map(({ num, title, description, href }, index) => (
          <li
            key={index}
            className="flex-1 flex flex-col justify-center gap-6 group w-full border-b border-white/20"
          >
            <div className="w-full flex justify-between items-center">
              <p className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                {num}
              </p>
              <Link
                href={href}
                className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent hover:-rotate-45 transition-all duration-500"
              >
                <BsArrowDownRight className="text-primary text-3xl" />
              </Link>
            </div>
            <h2 className="h2 font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
              {title}
            </h2>
            <p className="text-white/60">{description}</p>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
