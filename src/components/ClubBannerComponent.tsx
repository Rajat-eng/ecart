import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ClubBannerComponent = () => {
  return (
    <div className="mt-5 w-full h-28 max-h-32 relative border-4 border-[#fbb000] ">
      <Image src={"/Images/club_banner.png"} alt="image" layout="fill" />
    </div>
  );
};

export default ClubBannerComponent;
