import Header from "../components/Header";
import Hero from "../components/Hero";
import Packages from "../components/Packages";
import About from "../components/About";
import Gallery from "../components/Gallery";
//import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Packages />
      <Gallery />
      <Footer />
      
    </>
  );
}