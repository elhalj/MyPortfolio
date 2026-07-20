import React from "react";
import { LuFileSpreadsheet } from "react-icons/lu";

const VueEnsemble = () => {
  return (
    <div>
      <div className="flex items-center gap-4 px-4 md:px-8 py-4 bg-gray-800 uppercase border-y border-gray-700 text-white">
        <LuFileSpreadsheet />
        <h1>vue d'ensemble</h1>
      </div>
      <div className="p-4 md:px-32 uppercase font-bold grid grid-cols-1 md:grid-cols-2 items-center text-center gap-4">
        <div className="relative flex justify-around items-center gap-4 bg-gray-800 p-6 hover:scale-105 hover:translate-y-0 transition-transform duration-300 text-gray-300">
          <h1 className="text-7xl text-cyan-400">2</h1>
          <p>ans d'experience professionnel</p>
          <h1 className="text-9xl text-gray-600 absolute right-0 opacity-30">
            2
          </h1>
        </div>
        <div className="relative flex justify-around items-center gap-4 bg-gray-800 p-6 hover:scale-105 hover:translate-y-0 transition-transform duration-300 text-gray-300">
          <h1 className="text-7xl text-cyan-400">1</h1>
          <p>an d'enseignement post-secondaire</p>
          <h1 className="text-9xl text-gray-600 absolute right-0 opacity-30">
            1
          </h1>
        </div>
        <div className="relative flex justify-around items-center gap-4 bg-gray-800 p-6 hover:scale-105 hover:translate-y-0 transition-transform duration-300 text-gray-300">
          <h1 className="text-7xl text-cyan-400">1</h1>
          <p>certification</p>
          <h1 className="text-9xl text-gray-600 absolute right-0 opacity-30">
            1
          </h1>
        </div>
      </div>
    </div>
  );
};

export default VueEnsemble;
