"use client";

import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { infoList } from "@/constants";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:w-[54%] order-2 xl:order-none mb-8 xl:mb-0">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
            <p className="text-white/60">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              soluta voluptate quaerat ipsam mollitia cupiditate.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Firstname" autoComplete="off" />
              <Input type="text" placeholder="Lastname" autoComplete="off" />
              <Input
                type="email"
                placeholder="Email address"
                autoComplete="off"
              />
              <Input
                type="phone"
                placeholder="Phone number"
                autoComplete="off"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="est">Web Development</SelectItem>
                  <SelectItem value="cst">Ui/UX Design</SelectItem>
                  <SelectItem value="mst">Logo Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea
              className="h-[200px]"
              placeholder="Type your message here."
            />
            <Button type="submit" size="md" className="max-w-40">
              Send message
            </Button>
          </form>
        </div>
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none">
          <ul className="flex flex-col gap-10">
            {infoList.map(({ icon, title, description }, index) => (
              <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{title}</p>
                  <h3 className="text-xl">{description}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
