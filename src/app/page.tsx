import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoWeServe from "@/components/WhoWeServe";
import CarShowcase from "@/components/CarShowcase";
import SeeTheDifference from "@/components/SeeTheDifference";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import MaintenancePlans from "@/components/MaintenancePlans";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main>
        <Hero />
        <WhoWeServe />
        <CarShowcase />
        <SeeTheDifference />
        <HowItWorks />
        <MaintenancePlans />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
