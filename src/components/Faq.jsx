import FaqItem from "./FaqItem";

const Faq = () => {
  const data = [
    {
      q: "Is there a free trial available?",
      a: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      q: "Can I change my plan later?",
      a: "Yes, you can upgrade or downgrade your plan at any time. If you choose to upgrade, you'll be prorated on your new plan for the rest of the month.",
    },
    {
      q: "What is your cancellation policy?",
      a: "You can cancel your subscription at any time. Once cancelled, your subscription will remain active until the end of your billing cycle.",
    },
    {
      q: "Can other info be added to the invoice?",
      a: "Yes, you can add any information to the invoice, including a purchase order number.",
    },
    {
      q: "How does billing work?",
      a: "You can pay by credit card or bank transfer. If you choose to pay by bank transfer, we'll send you an invoice with our bank details.",
    },
    {
      q: "How do I change my account email?",
      a: "You can change your account email by the settings page. If you need help, please contact us.",
    },
  ];

  return (
    <div id="faq" className="mb-52">
      <h1 className="text-gray-900 text-[42px] md:text-[56px] font-bold text-center ">
        Frequently asked questions
      </h1>
      <p className="text-gray-500 text-base w-[75%] mx-auto md:w-full md:text-xl font-medium text-center">
        Everything you need to know about the product and billing.
      </p>
      <div className="mt-16 flex flex-col gap-8">
        {data.map((item, index) => {
          return <FaqItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
