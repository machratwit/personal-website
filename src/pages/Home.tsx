import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Home = () => {
  const [showLoop, setShowLoop] = useState(false);
  const [showBroke, setShowBroke] = useState(false);

  useEffect(() => {
    const showBrokeTimer = setTimeout(() => {
      setShowBroke(true);
    }, 1600);

    const showLoopTimer = setTimeout(() => {
      setShowLoop(true);
      setShowBroke(false);
    }, 2500);

    return () => {
      clearTimeout(showBrokeTimer);
      clearTimeout(showLoopTimer);
    };
  }, []);
  return (
    <>
      <div
        id="home"
        className="flex flex-col items-center justify-center space-y-8 min-h-screen scroll-mt-24 pt-40"
      >
        <div className="text-txtcolor text-3xl/relaxed sm:text-4xl/relaxed lg:text-5xl/relaxed font-bold text-center min-h-[7rem] flex flex-col justify-center">
          <div className="h-[4rem] sm:h-[4.5rem] lg:h-[3.5rem]">
            <TypeAnimation
              sequence={["Hi, my name is Rodney\n"]}
              style={{ whiteSpace: "pre-line" }}
              wrapper="span"
              cursor={false}
              speed={25}
              repeat={0}
            />
            {showBroke && (
              <TypeAnimation
                sequence={["I am broke", 100]}
                wrapper="span"
                speed={25}
                cursor={false}
                repeat={0}
              />
            )}
            {showLoop && (
              <TypeAnimation
                sequence={[
                  "I am interested in web development",
                  1000,
                  "I am interested in cybersecurity",
                  1000,
                ]}
                wrapper="span"
                speed={25}
                repeat={Infinity}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-8 mt-12 md:mt-20 text-txtcolor text-4xl/relaxed">
          <div className="flex space-x-8 sm:space-x-10">
            <a
              href="https://www.linkedin.com/in/rodneymach/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-blue-400/60 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/machratwit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-blue-400/60 transition-all duration-300 hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:rodney.mach123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-blue-400/60 transition-all duration-300 hover:scale-110"
            >
              <MdOutlineEmail size={24} />
            </a>
          </div>
          <FaArrowDown size={30} className="animate-bounce mt-40 md:mt-60" />
        </div>
      </div>
    </>
  );
};
export default Home;
