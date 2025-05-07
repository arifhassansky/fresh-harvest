import About from "@/app/components/home/About";
import Banner from "@/app/components/home/Banner";
import Blogs from "@/app/components/home/Blogs";
import Leaf from "@/app/components/home/Leaf";
import Products from "@/app/components/home/Products";
import SeasonalOfferBanner from "@/app/components/home/SeasonalOfferBanner";
import Testimonial from "@/app/components/home/Testimonial";

export default function Home() {
  return (
    <>
      <Banner />
      <Leaf />
      <Products />
      <About />
      <SeasonalOfferBanner />
      <Testimonial />
      <Blogs />
    </>
  );
}
