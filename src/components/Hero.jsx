import zapier from "../assets/svgs/zapier.svg";
import spotify from "../assets/svgs/spotify.svg";
import zoom from "../assets/svgs/zoom.svg";
import slack from "../assets/svgs/slack.svg";
import amazon from "../assets/svgs/amazon.svg";
import adobe from "../assets/svgs/adobe.svg";

const Hero = () => {
  // Scroll to a specific section
  const handleScroll = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-[90%] m-auto text-center ">
      <h1 className="text-gray-800 text-5xl font-extrabold mt-20 leading-[42px] sm:leading-[85px] xl:w-[75%] m-auto sm:text-7xl">
        Elevate Your Presence with Seamless Design and Innovation.
      </h1>
      <p className="text-gray-600 text-base sm:text-xl mt-4">
        From strategic planning to digital presence, we're your dedicated
        partner in achieving solo success.
      </p>
      <button
        className="mt-8 mb-28 bg-gray-800 text-lg text-gray-50 rounded-lg h-14 w-52 hover:scale-105 active:scale-95 duration-150"
        onClick={() => handleScroll("pricing")}
      >
        View Pricing
      </button>
      <div>
        <span className="text-gray-400">Trusted by 250+ Companies</span>
        <div className="flex items-center justify-center sm:justify-between w-[75%] mx-auto mt-8 mb-8 flex-wrap gap-24">
          <img src={zapier} alt="zapier" />
          <img src={spotify} alt="spotify" />
          <img src={zoom} alt="zoom" />
          <img src={slack} alt="slack" />
          <img src={amazon} alt="amazon" />
          <img src={adobe} alt="adobe" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
