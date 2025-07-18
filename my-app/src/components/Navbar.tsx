const Navbar = () => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/70 text-txtcolor backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className=" p-10 flex justify-between items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl">My Portfolio</h1> {/* Put logo or name */}
            </div>
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group px-3 py-2 text-sm font-medium transition-colors hover:text-blue-400`}
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
      </header>
    </>
  );
};

export default Navbar;
