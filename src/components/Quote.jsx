import Logo from "../assets/svgs/Logomark.svg";
import Sisyphus from "../assets/svgs/Sisyphus.svg";
import Avatar from "../assets/images/Avatar.png";

const Quote = () => {
  return (
    <div className="py-24 md:px-[45px] lg:px-[90px] bg-gray-50 flex flex-col items-center justify-center gap-10 mt-32 mb-32">
      <div className="flex gap-3">
        <img src={Logo} />
        <img src={Sisyphus} />
      </div>
      <h1 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold leading-[35px] lg:leading-[60px] text-center">
        We've been with unicraft to kick start every new project and can't
        imagine working without it.
      </h1>
      <div className="flex flex-col justify-center items-center">
        <img src={Avatar} />
        <p className="text-gray-900 font-medium lg:text-lg leading-7 mt-4">
          Candice Wu
        </p>
        <p className="text-gray-500 text-sm lg:text-base font-normal lg:leading-7">
          Product Manager, Sisyphus
        </p>
      </div>
    </div>
  );
};

export default Quote;
