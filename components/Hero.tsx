import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Turn Unused Software Licenses into Cash
        </h1>
        <p className="text-lg md:text-xl mb-6">
          SoftSell helps you resell your old or unused software licenses in just
          a few clicks.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
}
