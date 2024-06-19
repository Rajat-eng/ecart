import SiteHeader from "@/components/Layouts/site-header";
import CarouselCompenent from "@/components/CarouselCompenent";
import Image from "next/image";
import MainHeading from "@/components/MainHeading";
import ClubBannerComponent from "@/components/ClubBannerComponent";
import Memberships from "@/components/MemberShipComponent";
import GlobalSearch from "@/components/GlobalSearchComponent";
import BoardAdvisory from "@/components/BoardAdvisoryComponent";
import BusinessEvents from "@/components/BusinessEventsComponent";
import BusinessPartnerships from "@/components/BusinessPartnershipsComponent";
import BusinessAcademy from "@/components/BusinessAcademyComponent";
import TopEmployers from "@/components/TopEmployersComponent";
import Footer from "@/components/Footer";
import CityHeader from "@/components/CityHeaderComponent";
import MainComponentHeader from "@/components/Header";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <MainComponentHeader />
      <SiteHeader />
      <CarouselCompenent />
      <MainHeading />
      <CityHeader />
      <ClubBannerComponent />
      <Memberships />
      <GlobalSearch />
      <BoardAdvisory />
      {/* <BusinessEvents /> */}
      <BusinessPartnerships />
      <BusinessAcademy />
      <TopEmployers />
      <Footer />
    </main>
  );
}
