import React from "react";
import { siteMap } from "@/config/site";
import { NavigationMenuDemo } from "./demo-nav";
const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-yellow-200 ">
      <div className="flex h-auto items-center">
        <NavigationMenuDemo items={siteMap.mainNav} />
      </div>
    </header>
  );
};

export default SiteHeader;
