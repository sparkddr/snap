import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CallToAction />
      </main>
    </div>
  );
};

export default App;
