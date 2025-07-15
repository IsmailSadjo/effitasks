import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Carrousel from "@/components/home/Carrousel";
import Footer from "@/components/home/Footer";
import Testimonials from "@/components/home/Testimonials";
import Prefooter from "@/components/home/Prefooter";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Prefooter/>
      {/* <Carrousel /> */}
      <Footer />
    </>
  )
}