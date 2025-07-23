import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
        }}
        className="bg-blue-500"
      />
      <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/70 text-txtcolor backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="p-10 flex justify-between items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl">My Portfolio</h1> {/* Put logo or name */}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
            {/* Desktop Navigation - positioned to the right */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group px-3 py-2 text-sm font-medium transition-colors hover:text-blue-400"
                >
                  <span
                    className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 
                  after:h-[2px] after:bg-blue-400 after:translate-y-1 after:transition-all after:duration-300 
                  group-hover:after:w-full group-hover:after:left-0"
                  >
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </nav>
        {/* Mobile Navigation Menu */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-[69px] left-0 w-full flex-col gap-5 items-center pt-10 z-40`}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group px-3 py-2 text-sm font-medium transition-colors hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              <span
                className="relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                  after:w-0 after:h-[2px] after:bg-blue-400 after:translate-y-1 after:transition-all 
                  after:duration-300 group-hover:after:w-full group-hover:after:left-0"
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </header>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-midnight/70 backdrop-blur-md md:hidden"
          onClick={() => setIsOpen(false)} // optional: clicking outside closes menu
        ></div>
      )}
    </>
  );
};

export default Navbar;
