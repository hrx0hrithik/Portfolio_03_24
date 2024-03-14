// import { useEffect, useLayoutEffect, useState } from "react"
// import Navbar from "./components/Navbar"
// import Home from "./pages/Home"
// import Background from "./components/Background"
// import About from "./pages/About"
// import Experience from "./pages/Experience"
// import Projects from "./pages/Projects"
// import Contact from "./pages/Contact"
// import Footer from "./components/Footer"
// import LoadingScreen from "./components/LoadingScreen"

// function App() {
//   const [menuIsOpen, setMenuIsOpen] = useState(false);
//   const [scrolling, setScrolling] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isDarkTheme, setIsDarkTheme] = useState(null);

//     useLayoutEffect(() => {
//       console.log("useLayoutEffect for DOMContentLoaded");
//       setIsLoading(false);
//     }, []);
    
  

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme === 'dark') {
//       setIsDarkTheme(true);
//     } else if (storedTheme === 'light') {
//       setIsDarkTheme(false);
//     } else {
//       const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
//       setIsDarkTheme(prefersDarkMode);
//     }

//     if (isDarkTheme) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [isDarkTheme]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 40) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     document.addEventListener("scroll", handleScroll);
//     return () => {
//       document.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   console.log("isLoading:", isLoading);

//   return (
//     <>
//       {isLoading ? (
//         <LoadingScreen />
//       ) : (
//         <>
//           <Navbar
//             menuIsOpen={menuIsOpen}
//             setMenuIsOpen={setMenuIsOpen}
//             scrolling={scrolling}
//             isDarkTheme={isDarkTheme}
//             setIsDarkTheme={setIsDarkTheme}
//           />
//           <section
//             id="home"
//             className="dark:bg-[#272621] bg-[#f0f2f5] max-w-[100vw] -mt-20 pt-20 dark:text-white text-black relative overflow-x-hidden"
//           >
//             <Background />
//             <main className="relative md:container mx-auto font-QuicksandNew px-5 lg:px-44 ">
//               <Home isDarkTheme={isDarkTheme} />
//               <hr className="opacity-15" />
//               <About />
//               <hr className="opacity-15" />
//               <Experience />
//               <hr className="opacity-15" />
//               <Projects />
//               <hr className="opacity-15" />
//               <Contact />
//             </main>
//           </section>
//           <Footer />
//         </>
//       )}
//     </>
//   );
// }

// export default App



import React, { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Background from "./components/Background"
import About from "./pages/About"

import Footer from "./components/Footer"
import LoadingScreen from "./components/LoadingScreen";

// Lazy load your components
// const Home = React.lazy(() => import("./pages/Home"));
// const Background = React.lazy(() => import("./components/Background"));
// const About = React.lazy(() => import("./pages/About"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
// const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkTheme(true);
    } else if (storedTheme === 'light') {
      setIsDarkTheme(false);
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkTheme(prefersDarkMode);
    }

    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkTheme]);

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
          className="dark:bg-[#272621] bg-[#f0f2f5] max-w-[100vw] -mt-20 pt-20 dark:text-white text-black relative overflow-x-hidden"
        >
          <Background />
          <main className="relative md:container mx-auto font-QuicksandNew px-5 lg:px-44 ">
            <Home isDarkTheme={isDarkTheme} />
            <hr className="opacity-15" />
            <About />
            <hr className="opacity-15" />
            <Experience />
            <hr className="opacity-15" />
            <Projects />
            <hr className="opacity-15" />
            <Contact />
          </main>
        </section>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
