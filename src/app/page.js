import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Blogs from "@/components/home/Blogs";
import Leaf from "@/components/home/Leaf";
import Products from "@/components/home/Products";
import SeasonalOfferBanner from "@/components/home/SeasonalOfferBanner";
import Testimonial from "@/components/home/Testimonial";

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
