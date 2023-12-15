import TaskAltIcon from "@mui/icons-material/TaskAlt";
const Card = ({ category, desc, price, featureCount, main }) => {
  const features = [
    "20,000+ of PNG & SVG graphics",
    "Access to 100 million stock images",
    "Upload custom icons and fonts",
    "Unlimited Sharing",
    "Upload graphics & video in up to 4k",
    "Unlimited Projects",
    "Instant Access to our design system",
    "Create teams to collaborate on designs",
  ];
  return (
    <div
      className={`w-[90%] md:w-96 px-6 py-10 rounded-2xl border border-solid border-gray-200 hover:scale-105 duration-150 ${
        main ? "bg-gray-800 shadow-lg" : "bg-white"
      } `}
    >
      <h1
        className={`text-2xl font-bold ${
          main ? "text-white" : "text-neutral-800"
        }`}
      >
        {category}
      </h1>
      <p
        className={`mt-3 text-base font-medium ${
          main ? "text-gray-50" : "text-gray-500"
        }`}
      >
        {desc}
      </p>
      <p
        className={`mt-4 text-6xl font-medium relative ${
          main ? "text-gray-50" : "text-gray-800"
        }`}
      >
        ${price}
        <span
          className={`text-base font-normal ml-3 absolute top-4 ${
            main ? "text-gray-50" : "text-gray-600"
          }`}
        >
          / Month
        </span>
      </p>
      <button
        className={`py-[6px] px-3 mt-6 mb-10 border rounded-lg text-center w-full ${
          main
            ? "font-bold text-gray-800 border-gray-600 bg-gray-50"
            : "text-gray-600 "
        }`}
      >
        Get Started Now
      </button>
      <div className="flex items-start flex-col gap-2">
        {/* get the available features */}
        {features.slice(0, featureCount).map((item, index) => {
          return (
            <p
              key={index}
              className={`text-base font-normal ${
                main ? "text-gray-50" : "text-gray-800"
              }`}
            >
              <TaskAltIcon fontSize="small" /> {item}
            </p>
          );
        })}
        {/* get the unavailable features */}
        {features.slice(featureCount).map((item, index) => {
          return (
            <p key={index} className="text-gray-400 text-base font-normal">
              <TaskAltIcon fontSize="small" /> {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
