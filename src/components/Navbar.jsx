const Navbar = () => {
  // Scroll to a specific section
  const handleScroll = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-between items-center h-20 w-[90%] mx-auto">
      <div className="font-bold text-gray-700 md:flex-1 ">UniCraft</div>
      <div className="flex gap-2 md:justify-evenly items-center text-sm font-medium text-gray-700 md:flex-1">
        <div
          className="cursor-pointer hover:scale-110 duration-150 hover:font-bold"
          onClick={() => handleScroll("working")}
        >
          How it works
        </div>
        <div
          className="cursor-pointer hover:scale-110 duration-150 hover:font-bold"
          onClick={() => handleScroll("pricing")}
        >
          Pricing
        </div>
        <div
          className="cursor-pointer hover:scale-110 duration-150 hover:font-bold"
          onClick={() => handleScroll("faq")}
        >
          FAQ
        </div>
      </div>
      <div className="hidden md:block md:flex-1">
        <button className=" ml-auto font-semibold text-sm md:flex justify-center items-center h-12 w-32 md:border md:border-gray-600 text-gray-600 md:border-solid rounded-lg md:shadow-sm hover:bg-gray-800 hover:text-gray-50 duration-150">
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
