import BeforeAfter from "@/components/BeforeAfter";
import BookingFlow from "@/components/BookingFlow";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Tariffs from "@/components/Tariffs";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <HowItWorks />
        <Services />
        <div id="calc">
          <div id="calc-slot">
            <BookingFlow />
          </div>
        </div>
        <Tariffs />
        <BeforeAfter />
        <Reviews />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
