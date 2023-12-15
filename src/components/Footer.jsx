import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-white to-pink-50 -z-10 w-full h-full absolute"></div>
      <div className="text-center backdrop-blur mt-36 pt-36">
        <h1 className="text-gray-900 text-4xl md:text-7xl font-black">
          No long-term contracts.
        </h1>
        <h2 className="text-gray-900 text-4xl md:text-7xl font-black mt-3">
          No catches. Simple.
        </h2>
        <p className="text-gray-500 md:text-xl font-medium mt-4">
          Start your 30-day free trial. Cancel anytime.
        </p>
        <button className="mt-8 mb-28 bg-gray-800 text-lg text-gray-50 rounded-lg h-14 w-52 hover:scale-105 active:scale-95 duration-150">
          Contact us
        </button>
        <div className="border border-b-gray-300 w-[80%] md:w-[90%] mx-auto"></div>
        <div className="w-[80%] md:w-[90%] mx-auto mt-8">
          <h3 className="text-left text-gray-700 font-bold text-2xl">
            UniCraft
          </h3>
          <p className="text-left text-gray-400 text-lg font-medium w-72">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
          <div className="flex justify-between items-center pb-8 mt-8 text-gray-400 text-base font-normal">
            <p className="mr-auto">© 2077 Untitled UI. All rights reserved.</p>
            <div className="flex ml-10 md:ml-auto gap-2 md:gap-7">
              <TwitterIcon />
              <LinkedInIcon />
              <FacebookIcon />
              <GitHubIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
