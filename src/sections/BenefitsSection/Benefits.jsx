import React from 'react';

export default function BenefitsSection() {
  return (
    <section className="text-white py-16 px-4 font-inter text-justify">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        
        <div className="pb-8">
          <h2 className="text-2xl font-semibold mb-4">Simplify Pentesting for Your Team</h2>
          <p className="text-lg text-gray-300">
            PentX AI agents make pentesting easy for anyone on your team. Juniors or experts will benefit.
          </p>
        </div>
        
        <div className=" pb-8 md:pl-8">
          <h2 className="text-2xl font-semibold mb-4">Cut Costs, Maximize Security</h2>
          <p className="text-lg text-gray-300">
            Automate pentests to save on manpower, accessing expert-level security at a fraction of the usual cost.
          </p>
        </div>
        
        <div className="pt-8">
          <h2 className="text-2xl font-semibold mb-4">Pentests in Hours, Not Days</h2>
          <p className="text-lg text-gray-300">
            Complete thorough pentests in hours, streamlining audits and saving time and resources for critical tasks.
          </p>
        </div>
        
        <div className="md:pl-8 pt-8">
          <h2 className="text-2xl font-semibold mb-4">Pentest Anytime, Anywhere</h2>
          <p className="text-lg text-gray-300">
            Run automated pentests on-demand with ease, ensuring security assessments fit seamlessly into your schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
