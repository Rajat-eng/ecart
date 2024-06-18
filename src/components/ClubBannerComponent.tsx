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
    <div>
      <Image
        src={"/Images/club_banner.png"}
        alt="image"
        sizes="100vw"
        // Make the image display full width
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={500}
        // layout="fill"
        // style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default ClubBannerComponent;
