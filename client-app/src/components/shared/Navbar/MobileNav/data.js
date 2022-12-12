import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { MdOutlineModelTraining, MdWorkOutline } from "react-icons/md";
import { VscCommentDiscussion } from "react-icons/vsc";
import { HiOutlineShieldCheck } from "react-icons/hi";

export const navigationLinks = [
  {
    link: "Home",
    to: "/",
    svg: <AiOutlineHome />,
    arrow: false,
  },
  {
    link: "Services & Solutions",
    to: "/services-solutions",
    arrow: false,
    svg: <MdOutlineModelTraining />,
  },
  {
    link: "Why Us ?",
    to: "/why-us",
    arrow: false,
    svg: <AiOutlineQuestionCircle />,
  },
  {
    link: "Careers",
    to: "/careers",
    arrow: false,
    svg: <MdWorkOutline />,
  },
  {
    link: "Contact Us",
    to: "/contact-us",
    arrow: false,
    svg: <VscCommentDiscussion />,
  },
  {
    link: "About Us",
    to: "/about",
    svg: <AiOutlineInfoCircle />,
    arrow: false,
  },
  {
    link: "Privacy",
    to: "/privacy",
    svg: <HiOutlineShieldCheck />,
    arrow: false,
  },
];
