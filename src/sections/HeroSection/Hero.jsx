import React from 'react'; 

export default function Hero() {
  return (
<div className="flex flex-col items-center justify-center text-white mt-20 font-inter">

        <div className="self-start mb-5 ml-72">
        <h1 className="text-5xl text-justify">
          Manual Pentesting is Obsolete – Meet the <br /> 
          First Fully <span className="font-bold">Autonomous AI Pentest Tool</span>
        </h1>
        </div>
        <div className="self-start w-[32em] text-textColor ml-72 mb-10">
        <p className="text-lg text-justify">
          Knowledge of <span className="font-bold">60+ Certified Cybersecurity Experts</span>, Trained on <span className="font-bold">67,800+ Pentest Reports</span>. 
          PentX Delivers Full-Scale Pentests in Hours – No Human Needed.
        </p>
        </div>

        {/* DEMO */}
        <div className="w-screen h-screen bg-gray-800">
            {/* Demo content here */}
        </div>



    </div>
  );
}
