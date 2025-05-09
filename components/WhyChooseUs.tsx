import React from "react";
import { ShieldCheck, Clock, DollarSign, Users } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Secure Transactions",
    description:
      "We use industry-standard security to protect your data and payments.",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Fast Processing",
    description: "Upload your license and get a quote in minutes.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: "Best Market Rates",
    description: "We offer competitive valuations on unused software licenses.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Trusted by Thousands",
    description:
      "Hundreds of happy clients have used SoftSell to cash in licenses.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white text-center" id="why-us">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
