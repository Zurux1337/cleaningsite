import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <div id="calc">
          <div id="calc-slot" />
        </div>
      </main>
      <Footer />
    </>
  );
}
