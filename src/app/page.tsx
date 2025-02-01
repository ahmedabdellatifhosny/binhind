import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Footer from "./components/layout/Footer";
import Menu from "./components/layout/Menu";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <Contact />
      <Footer />
    </>
  );
}
