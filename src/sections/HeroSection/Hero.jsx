import React from 'react'; 

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-white mt-10 font-inter px-4 md:px-0">
      <div className="mb-5 mt-10 w-full md:w-auto md:self-start md:ml-72">
        <h1 className="text-2xl md:text-5xl text-center md:text-left leading-tight">
          Manual Pentesting is Obsolete – Meet the <br className="hidden md:block" /> 
          First Fully <span className="font-bold">Autonomous AI Pentest Tool</span>
        </h1>
      </div>

      <div className="w-full md:w-[32em] text-textColor mb-10 text-center md:text-left md:self-start md:ml-72">
        <p className="text-sm md:text-lg leading-relaxed">
          Knowledge of <span className="font-bold">60+ Certified Cybersecurity Experts</span>, Trained on <span className="font-bold">67,800+ Pentest Reports</span>. 
          PentX Delivers Full-Scale Pentests in Hours – No Human Needed.
        </p>
      </div>

      {/* DEMO */}
      <div className="w-full h-64 md:w-screen md:h-screen bg-gray-800">
        {/* Demo content here */}
      </div>
    
    </div>
  );
}
