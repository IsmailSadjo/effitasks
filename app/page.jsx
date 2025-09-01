import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Carrousel from "@/components/home/Carrousel";
import Footer from "@/components/home/Footer";
import Testimonials from "@/components/home/Testimonials";
import Prefooter from "@/components/home/Prefooter";
import { auth } from "@/auth";

export default async function Home() {

  const session = await auth();

  return (
    <>
      <Header session={session}/>
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      {/* <Prefooter/> */}
      {/* <Carrousel /> */}
      {/* <Footer /> */}
    </>
  )
}