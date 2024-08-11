import Mission from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Approach } from "@/components/Team";
import Testimonials from "@/components/Testimonials";



import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar/>
        <Hero/>
        <Mission/>
        <Grid/>
       <Approach/>
       <Testimonials/>
       <Footer/>
      </div>
    </main>
  );
}
