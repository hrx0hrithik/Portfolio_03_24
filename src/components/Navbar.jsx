import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";

const Navbar = ({ menuIsOpen, setMenuIsOpen, scrolling ,isDarkTheme, setIsDarkTheme}) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = document.querySelectorAll('section');

      let activeSec = null;
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          activeSec = section.id;
        }
      });

      setActiveSection(activeSec);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="md:container sm:mx-auto px-5 lg:px-44 flex items-center justify-between min-w-full sm:h-20 h-14 z-20 sticky top-0 dark:text-white text-[#444444] font-QuicksandNew ">
      <div className={`absolute top-0 left-0 w-full sm:h-20 h-14 ${scrolling ? " bg-slate-300/15 drop-shadow backdrop-filter backdrop-blur-lg" : " drop-shadow-sm sm:drop-shadow-none sm:bg-transparent bg-slate-300/15"} `}></div>
      <div className="z-20 flex items-center">
        <p className=" sm:text-[32px] font-semibold drop-shadow-md filter-none ">PORTFOLIO</p>
      </div>
      <div className=' relative'>
        <button className='block sm:hidden' onClick={() => (setMenuIsOpen(!menuIsOpen))}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </button>
        <ol className={` ${menuIsOpen ? "flex flex-col absolute -right-5 top-9 min-w-[100vw] text-lg bg-[#33343243] divide-y divide-[#e5e7eb26] backdrop-filter backdrop-blur-lg" : "sm:flex hidden"}`}>
          <NavLink activeSection={activeSection} active={activeSection === 'home'} href='#home' menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} scrollToSection={scrollToSection}>Home</NavLink>
          <NavLink activeSection={activeSection} active={activeSection === 'about'} href='#about' menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} scrollToSection={scrollToSection}>About</NavLink>
          <NavLink activeSection={activeSection} active={activeSection === 'experience'} href='#experience' menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} scrollToSection={scrollToSection}>Experience</NavLink>
          <NavLink activeSection={activeSection} active={activeSection === 'project'} href='#project' menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} scrollToSection={scrollToSection}>Project</NavLink>
          <NavLink activeSection={activeSection} active={activeSection === 'contact'} href='#contact' menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} scrollToSection={scrollToSection}>Contact</NavLink>
        </ol>
      </div>
      <div className=" hidden sm:block sm:relative lg:absolute right-16">
        <ToggleButton isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      </div>
    </nav>
  )
}

function NavLink({ active, href, menuIsOpen, children, scrollToSection, setMenuIsOpen }) {

  const handleClick = () => {
    scrollToSection(href.slice(1));
    if (menuIsOpen) {
      setMenuIsOpen(false);
    }
  };

  const navLinkClassName = ` ${menuIsOpen ? " py-2 text-center hover:bg-slate-500/50" : " px-3"} ${active ? 'font-extrabold' : 'hover:underline underline-offset-4 font-medium'}`;
  const yellowBarClassName = `absolute -bottom-[2px] bg-yellow-300 w-4 h-1 rounded-full ${active ? '' : 'hidden'} ${menuIsOpen ? "hidden" : ""}`;

  return (
    <li className={navLinkClassName} onClick={handleClick} style={{ position: 'relative' }}>
      <button onClick={handleClick}>
        {children}
      </button>
      <span className={yellowBarClassName} style={{ left: active ? '50%' : '0', transform: active ? 'translateX(-50%)' : 'none' }}></span>
    </li>
  );
}

export default Navbar