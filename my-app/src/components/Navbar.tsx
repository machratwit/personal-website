import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <header className="fixed top-0 left-0 right-0 z-50 bg-navcolor text-txtcolor backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" p-4 flex justify-between items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">My Portfolio</h1>{" "}
              {/* Put logo or name */}
            </div>
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-500`} // Show underline when hover
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
