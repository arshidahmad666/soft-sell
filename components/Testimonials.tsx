import React from "react";

const testimonials = [
  {
    name: "Sarah Malik",
    role: "IT Manager",
    company: "TechNova Inc.",
    message:
      "SoftSell made it super easy to sell our unused licenses. The process was fast and transparent.",
  },
  {
    name: "Rohit Verma",
    role: "Procurement Head",
    company: "CloudWorks",
    message:
      "Highly professional and responsive team. Got paid the same day we accepted the offer!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100 text-center" id="testimonials">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <p className="text-gray-700 italic mb-4">“{t.message}”</p>
              <div className="text-sm font-semibold">
                {t.name} —{" "}
                <span className="text-gray-500">
                  {t.role}, {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
