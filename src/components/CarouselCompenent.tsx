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

const CarouselCompenent = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-full"
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1 ">
            <div className="p-1 w-full h-[600px] relative ">
              <Image
                src={"/Images/c0.png"}
                alt="image"
                layout="fill"
                style={{ objectFit: "cover" }}
              />
              {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-end p-10 gap-10 w-full">
                <p className="text-white text-6xl">
                  International Business Advantage
                </p>
                <p className="text-white text-2xl">
                  A CXO BUSINESS NETWORK PLATFORM
                </p>
                <ul className="list-disc flex items-center gap-1">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <li key={index} className="w-2 h-2 text-white"></li>
                  ))}
                </ul>
              </div> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselCompenent;
