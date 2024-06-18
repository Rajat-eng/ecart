import SiteHeader from "@/components/Layouts/site-header";
import CarouselCompenent from "@/components/CarouselCompenent";
import Image from "next/image";
import MainHeading from "@/components/MainHeading";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <SiteHeader />
      <CarouselCompenent />
      <MainHeading />
    </main>
  );
}
