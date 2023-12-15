import Card from "./Card";

const Pricing = () => {
  const data = [
    {
      category: "Freebie",
      desc: "Ideal for individuals who need quick access to basic features.",
      price: 0,
      featureCount: 2, // number of features to show
      main: false,
    },
    {
      category: "Professional",
      desc: "Ideal for individuals who who need advanced features and tools for client work.",
      price: 25,
      featureCount: 5, // number of features to show
      main: true, // main card
    },
    {
      category: "Enterprise",
      desc: "Ideal for businesses who need personalized services and security for large teams. ",
      price: 100,
      featureCount: 8, // number of features to show
      main: false,
    },
  ];
  return (
    <div id="pricing" className="relative mt-20 mb-20">
      <div className="bg-gradient-to-r from-white to-pink-50  h-full w-full absolute -z-10"></div>
      <div className="py-1 backdrop-blur">
        <div className="w-[80%] m-auto mt-20  flex-wrap">
          <h1 className="text-gray-900 text-[42px] md:text-6xl font-bold text-center">
            Pricing made for collaborative support.
          </h1>
          <p className="text-gray-500 text-xl text-center mt-5 md:w-[75%] lg:w-[45%] m-auto">
            Plain is made for your entire company. Only pay for users that
            actually message customers. Everyone else is free, forever.
          </p>
        </div>
        <div className="flex justify-center items-center gap-6 mt-10 mb-20 flex-wrap">
          {data.map((item, index) => {
            return <Card key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
