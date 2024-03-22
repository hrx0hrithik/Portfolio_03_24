import { Suspense, lazy, useEffect, useState } from "react";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Background from "./components/Background"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"

const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // For theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkTheme(true);
    } else if (storedTheme === 'light') {
      setIsDarkTheme(false);
    } else {
      setIsDarkTheme(true);
    }

    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

  // for Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // for mobile responsive
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
        scrolling={scrolling}
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
      <Suspense fallback={<LoadingScreen />}>
        <section
          id="home"
          className="dark:bg-[#0b1121] bg-[#F0F2F5] max-w-[100vw] -mt-14 sm:-mt-20 sm:pt-20 dark:text-white text-black relative overflow-x-hidden"
        >
          <Background />
          <main className="relative md:container mx-auto font-QuicksandNew px-5 lg:px-44 sm:mt-0 mt-14 ">
            <Home isDarkTheme={isDarkTheme} isMobile={isMobile} />
            <hr className=" dark:opacity-15 " />
            <About />
            <hr className=" dark:opacity-15 " />
            <Experience isDarkTheme={isDarkTheme} isMobile={isMobile} />
            <hr className=" dark:opacity-15 " />
            <Projects />
            <hr className=" dark:opacity-15 " />
            <Contact isMobile={isMobile} />
          </main>
        </section>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
