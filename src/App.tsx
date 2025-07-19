import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="min-h-screen bg-midnight font-raleway">
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
