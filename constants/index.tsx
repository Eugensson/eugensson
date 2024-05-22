import { title } from "process";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

export const navLinks = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export const socialLinks = [
  {
    name: "Github",
    path: "https://github.com/Eugensson",
    icon: <FaGithub className="w-6 h-6" />,
  },
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/serhii-kulbashnyi",
    icon: <FaLinkedinIn className="w-6 h-6" />,
  },
  {
    name: "Telegram",
    path: "https://t.me/Eugensson",
    icon: <FaTelegramPlane className="w-6 h-6" />,
  },
];

export const statList = [
  { num: 2, text: "Years of experience" },
  { num: 12, text: "Projects completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 250, text: "Code commits" },
];

export const serviceList = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, provident.",
    href: "/",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, provident.",
    href: "/",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, provident.",
    href: "/",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, provident.",
    href: "/",
  },
];

export const projectList = [
  {
    num: "01",
    category: "frontend",
    title: "Web-Studio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur reiciendis, in nobis perferendis doloribus laudantium.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascrypt" }],
    image: "/project1.jpg",
    live: "",
    github: "https://eugensson.github.io/web-studio/",
  },
  {
    num: "02",
    category: "frontend",
    title: "Finance Ledger",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur reiciendis, in nobis perferendis doloribus laudantium.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascrypt" }],
    image: "/project2.jpg",
    live: "",
    github: "https://eugensson.github.io/finance-ledger-lending/",
  },
  {
    num: "03",
    category: "frontend",
    title: "Phonebook App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur reiciendis, in nobis perferendis doloribus laudantium.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascrypt" },
      { name: "React" },
      { name: "Redux" },
    ],
    image: "/project3.jpg",
    live: "",
    github: "https://eugensson.github.io/phonebook/",
  },
];
