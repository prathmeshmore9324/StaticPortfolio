import Nav from "./components/Nav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Nav />

      {/* Ensure each section has some content to be visible */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-200 ">
        <Home />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-300">
        <About />
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-400">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-500">
        <ContactUs />
      </section>
      <Footer/>
    </div>
  );
};

export default App;
