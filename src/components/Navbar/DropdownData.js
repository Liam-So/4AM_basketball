import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const DropdownData = [
  {
    title: "About",
    path: "/",

    subNav: [
      {
        title: "Why 4AM",
        path: "/users",
      },
      {
        title: "Our Mission",
        path: "/mission",
      },
      {
        title: "Our Team",
        path: "/team",
      },
      {
        title: "Scholarship",
        path: "/scholarship",
      },
      {
        title: "Media",
        path: "/media",
      },
    ],
  },
  {
    title: "Services",
    path: "/",

    subNav: [
      {
        title: "Register",
        path: "/register",
      },
      {
        title: "Gear",
        path: "/gear",
      },
    ],
  },
  {
    title: "Donate",
    path: "/donate",

    subNav: [],
  },
  {
    title: "Cart",
    path: "/cart",

    subNav: [],
  },
];
