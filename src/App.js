// import logo from "./logo.svg";
import "./App.css";
import Footer from "./Sections/footer/Footer";
import NavBar from "./Sections/navbar/NavBar";
import Header from "./Sections/header/Header";
import About from "./Sections/about/About";
import Services from "./Sections/services/Services";
import Portfolio from "./Sections/Portfolio/Portfolio";
import Testimonials from "./Sections/testimonials/Testimonials";
import Faqs from "./Sections/faqs/Faqs";
import Contact from "./Sections/Contact/Contact";
import Modal from "./Components/Modal";
import Theme from "./Theme/Theme";
import { useThemeContext } from "./Context/theme-context";
import FloatingNav from "./Sections/floating-nav/FloatingNav";
import { useRef, useState, useEffect } from "react";

function App() {
  const { themeState } = useThemeContext();

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if (
      siteYPostion < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPostion > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    //cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPostion]);

  //console.log(mainRef.current.getBoundingClientRect());

  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <NavBar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
}

export default App;
