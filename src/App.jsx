import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Working from "./components/Working";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Quote from "./components/Quote";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-white to-pink-100  h-[180px] w-full absolute -z-10 top-0 right-0"></div>
      <div className="backdrop-blur-2xl pb-10">
        <Navbar />
        <Hero />
      </div>
      <Projects />
      <Working />
      <Quote />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
