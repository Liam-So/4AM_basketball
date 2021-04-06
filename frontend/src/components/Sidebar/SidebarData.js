import React from "react";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "About",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Why 4AM",
        path: "/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Our Team",
        path: "/team",
        icon: <IoIcons.IoMdPeople />,
      },
      {
        title: "Scholarship",
        path: "/scholarship",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Media",
        path: "/media",
        icon: <IoIcons.IoIosCamera />,
      },
    ],
  },
  {
    title: "Register",
    path: "/register"
  },
  {
    title: "Donate",
    path: "/donate",
  },
  {
    title: "Cart",
    path: "/cart",
  },
];
