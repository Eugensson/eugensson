import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

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
    path: "https://www.linkedin.com/in/eugensson",
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
    category: "full stack",
    title: "E-commerce Amazona",
    description: "E-commerce Amazona",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Tailwind" },
      { name: "DaisyUI" },
      { name: "Javascrypt" },
      { name: "Next.js" },
      { name: "Auth.js" },
      { name: "SWR" },
      { name: "Mongoose" },
      { name: "MongoDB" },
      { name: "Cloudinary" },
      { name: "Chart.js" },
      { name: "PayPal" },
      { name: "Zustand" },
    ],
    image: "/amazona.jpg",
    live: "https://amazona-e-commerce.vercel.app/",
    github: "https://github.com/Eugensson/amazona-e-commerce",
  },
  {
    num: "02",
    category: "full stack",
    title: "Website KuchTech.com",
    description:
      "Website of the professional owner for cafes, bars and restaurants",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Tailwind" },
      { name: "Javascrypt" },
      { name: "Next.js" },
      { name: "Auth.js" },
      { name: "SWR" },
      { name: "Mongoose" },
      { name: "MongoDB" },
      { name: "Leaflet" },
      { name: "Cloudinary" },
      { name: "Nodemailer" },
    ],
    image: "/kuchtech.jpg",
    live: "https://kuchtech.com",
    github: "https://github.com/Eugensson/kuchtech",
  },
  {
    num: "03",
    category: "full stack",
    title: "Event Platform",
    description: "Platform for organizing and searching for your events.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Tailwind" },
      { name: "Javascrypt" },
      { name: "Next.js" },
      { name: "Clerk" },
      { name: "Mongoose" },
      { name: "MongoDB" },
      { name: "Stripe" },
      { name: "PayPal" },
      { name: "Uploadthing" },
    ],
    image: "/evently.jpg",
    live: "https://event-platform-red-three.vercel.app/",
    github: "https://github.com/Eugensson/event-platform",
  },
];

export const infoList = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+380) 633 062 931",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "eugensson.25@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Cherkasy, Ukraine",
  },
];
