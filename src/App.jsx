import Navbar from "./components/Navbar";

import HeroMobile from "./assets/images/image-hero-mobile.png";
import HeroDesktop from "./assets/images/image-hero-desktop.png";

import databiz from "./assets/images/client-databiz.svg";
import audiophile from "./assets/images/client-audiophile.svg";
import maker from "./assets/images/client-maker.svg";
import meet from "./assets/images/client-meet.svg";

const App = () => {
  return (
    <div>
      <Navbar />
      <section className="max-w-xl m-auto lg:flex flex-row-reverse lg:max-w-5xl lg:items-center lg:gap-20 lg:h-[600px]  ">
        <div>
          <img
            src={HeroMobile}
            className="lg:hidden m-auto"
            alt="Someone working with a laptop"
          />
          <img
            src={HeroDesktop}
            className="hidden lg:block"
            alt="Someone working with a laptop"
          />
        </div>
        <div className="px-5 pt-12 lg:h-full lg:flex lg:flex-col justify-center relative ">
          <h1 className="text-center text-4xl font-semibold text-AlmostBlack lg:text-7xl lg:text-left">
            Make remote work
          </h1>
          <p className="mt-6 text-center text-MediumGray lg:text-left ">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-AlmostBlack  text-AlmostWhite hover:bg-AlmostWhite hover:text-AlmostBlack border border-AlmostBlack  mt-8 block mx-auto px-5 py-3 rounded-2xl lg:ml-0">
            Learn More
          </button>
          <div className="flex h-9 mt-8  justify-between gap-6 lg:absolute bottom-0  lg:w-full lg:px-6">
            <img src={databiz} alt="logo databiz" className="h-4" />
            <img src={audiophile} alt="logo audiophile" className="h-7" />
            <img src={meet} alt="logo meet" className="h-4" />
            <img src={maker} alt="logo maker" className="h-4" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
