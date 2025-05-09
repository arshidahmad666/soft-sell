import React from "react";
const steps = [
  {
    title: "Upload License",
    description: "Easily upload your unused software license in seconds.",
  },
  {
    title: "Get Valuation",
    description: "We analyze your license and give you an instant quote.",
  },
  {
    title: "Get Paid",
    description: "Accept the offer and receive payment quickly and securely.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-100 text-center" id="how-it-works">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <div className="text-blue-600 mb-4 text-4xl">{index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
