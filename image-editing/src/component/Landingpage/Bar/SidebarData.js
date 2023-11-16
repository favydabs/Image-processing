import React from "react";
import * as AiIcons from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import * as IoIcons from "react-icons/io";
// import { FaServicestack } from "react-icons/fa";
import { FaImages } from "react-icons/fa6";
export const SidebarData = [

  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/about",
    icon: <FcAbout />,
    cName: "nav-text",
  },

  // {
  //   title: "Services",
  //   path: "/service",
  //   icon: <FaServicestack />,
  //   cName: "nav-text",
  // },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Editor",
    path: "/main",
    icon: <FaImages />,
    cName: "nav-text",
  },
  
];