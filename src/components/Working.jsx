import arrow from "../assets/svgs/arrow.svg";

const Working = () => {
  return (
    <div
      id="working"
      className="rounded-2xl shadow-2xl w-[90%] md:w-[80%] m-auto mt-20 text-center px-10 py-10 min-h-[535px] flex flex-col justify-center"
    >
      <h1 className="text-gray-800 text-center text-5xl font-bold leading-[60px]">
        How it works
      </h1>
      <p className="text-gray-600 text-center text-xl font-medium">
        Premium designs, unlimited requests, super fast delivery, for one flat
        monthly fee.
      </p>
      <div>
        <div className="xl:mt-52 flex xl:gap-16 gap-32 mt-36 items-center justify-center relative flex-wrap">
          <img
            src={arrow}
            className="absolute left-[30%] bottom-[50%] hidden 2xl:block"
          />
          <img
            src={arrow}
            className="absolute right-[30%] bottom-[50%] hidden 2xl:block"
          />
          <div className="relative">
            <span className="absolute -z-10 font-bold text-[240px] right-[50%] -mr-[50%] top-[-170px] w-full bg-clip-text text-transparent bg-gradient-to-b from-purple-300 to-white">
              1
            </span>
            <h1 className="text-gray-800 text-center text-[40px] font-black">
              Subscribe
            </h1>
            <p className="text-gray-500 text-center text-lg font-medium w-full xl:w-96">
              Subscribe to a plan & you'll get an instant access to your private
              Slack channel.
            </p>
          </div>
          <div className="relative">
            <span className="absolute -z-10 font-bold text-[240px] right-[50%] -mr-[50%] top-[-170px] w-full bg-clip-text text-transparent bg-gradient-to-b from-purple-300 to-white">
              2
            </span>
            <h1 className="text-gray-800 text-center text-[40px] font-black">
              Request
            </h1>
            <p className="text-gray-500 text-center text-lg font-medium w-full xl:w-96">
              Submit any number of requests. We'll work through them, one at a
              time, ensuring consistent updates every 24-48 hours.
            </p>
          </div>
          <div className="relative">
            <span className="absolute -z-10 font-bold text-[240px] right-[50%] -mr-[50%] top-[-170px] w-full bg-clip-text text-transparent bg-gradient-to-b from-purple-300 to-white">
              3
            </span>
            <h1 className="text-gray-800 text-center text-[40px] font-black">
              Revise
            </h1>
            <p className="text-gray-500 text-center text-lg font-medium w-full xl:w-96">
              Need changes? We guarantee unlimited revisions until you're 200%
              satisfied.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
