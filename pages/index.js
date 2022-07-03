import Navbar from "../components/Navbar";
import HomeIntro from "../components/HomeIntro";
import bg1 from "../assets/bg1.svg";
import bg2 from "../assets/bg2.svg";
import bg3 from "../assets/bg3.svg";
import bg4 from "../assets/bg4.svg";
import Welcome from "../components/Welcome";
import Feature from "../components/Feature";
import { useRef } from "react";
import Contact from "../components/Contact";

export default function Home() {
  const home = useRef(null);
  const welcome = useRef(null);
  const products = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const moveToSection = (to) => {
    if (to === "Home") {
      scrollToSection(home);
    } else if (to === "About") {
      scrollToSection(welcome);
    } else if (to === "Products") {
      scrollToSection(products);
    } else if (to === "Contact") {
      scrollToSection(contact);
    }
  };

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${bg1.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar moveToSection={moveToSection} />
      </div>
      <section
        ref={home}
        id="home"
        style={{
          backgroundImage: `url(${bg1.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <HomeIntro />
      </section>
      <section
        ref={welcome}
        style={{
          backgroundImage: `url(${bg2.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Welcome />
      </section>
      <section
        ref={products}
        style={{
          backgroundImage: `url(${bg3.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Feature />
      </section>
      <section
        ref={contact}
        style={{
          backgroundImage: `url(${bg4.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Contact />
      </section>
    </div>
  );
}
