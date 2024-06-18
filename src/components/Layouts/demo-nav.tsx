"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { NavItem } from "@/types";

interface NavComponentProps {
  navdata: NavItem;
  isActive: Boolean;
  setActiveMenu: (title: string) => void;
}

interface MainNavProps {
  items: NavItem[];
}

const NavComponent = ({
  navdata,
  isActive,
  setActiveMenu,
}: NavComponentProps) => {
  const handleClick = (navdata: NavItem) => {
    if (navdata.href) {
      console.log("click");
    }
  };
  return (
    <ul
      className="relative bg-layout-blue4 cursor-pointer justify-between p-2 flex flex-col items-center flex-1 hover:bg-layout-blue2 flex-shrink-0 flex-nowrap"
      onClick={() => handleClick(navdata)}
      onMouseEnter={() => setActiveMenu(navdata.title)}
    >
      <li className={cn("text-center  text-white whitespace-nowrap")}>
        {navdata.title}
      </li>

      {isActive && navdata?.items && (
        <div
          className="absolute top-full w-auto h-auto p-2 bg-layout-blue4 mt-0 min-w-full"
          onMouseLeave={() => setActiveMenu("")}
        >
          <ul className="list-none flex flex-col items-center justify-between ">
            {navdata.items.map((item, index) => (
              <li
                className="text-white text-sm whitespace-nowrap border-1 border-white border-solid w-full text-center p-2"
                key={index}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </ul>
  );
};

export function NavigationMenuDemo({ items }: MainNavProps) {
  const [activeMenu, setActiveMenu] = React.useState("");
  return (
    <nav className="flex justify-between items-center w-full">
      {items.map((item) => {
        return (
          <NavComponent
            key={item.title}
            navdata={item}
            isActive={activeMenu === item.title}
            setActiveMenu={setActiveMenu}
          />
        );
      })}
    </nav>
  );
}
