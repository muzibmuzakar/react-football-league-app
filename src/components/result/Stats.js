import React from "react";
import Expose from '../../assets/img/logo/expose.png';
import Xtujuh from '../../assets/img/logo/x17.png';

const Stats = () => {
  return (
    <>
      <div className="flex justify-center gap-x-8 mb-8 items-center">
        {/* home */}
        <div className="lg:w-[400px] w-auto flex lg:flex-row flex-col text-center items-center gap-x-4">
          <img src={Expose} className="lg:w-[70px] w-[50px]" alt="home logo" />
          <h2 className="font-semibold lg:text-[25px] text-[20px] lg:w-auto w-[120px] line-clamp-1">
            Expose FC
          </h2>
        </div>

        <h2 className="font-semibold lg:text-[25px] text-[20px]">VS</h2>

        {/* away */}
        <div className="lg:w-[400px] w-auto flex lg:flex-row-reverse flex-col text-center items-center gap-x-4">
          <img src={Xtujuh} className="lg:w-[70px] w-[50px]" alt="home logo" />
          <h2 className="font-semibold lg:text-[25px] text-[20px] lg:w-auto w-[120px] line-clamp-1">
            X-17
          </h2>
        </div>
      </div>

      {/* Possession */}
      <div className="flex flex-col items-center mb-2 gap-y-1">
        <div className="flex justify-between w-[300px] md:w-[600px] lg:w-[1000px] mb-0">
          <p className="text-[14px] lg:text-[15px] font-semibold">68%</p>
          <p className="text-[14px] lg:text-[15px]">Possession %</p>
          <p className="text-[14px] lg:text-[15px]">32%</p>
        </div>
        <div className="flex justify-center gap-x-2">
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4 flex justify-end">
            <div className="bg-[#1C6DD0] h-[8px] lg:h-[10px] rounded-full w-[68%]"></div>
          </div>
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4">
            <div className="bg-[#FC2947] h-[8px] lg:h-[10px] rounded-full w-[32%]"></div>
          </div>
        </div>
      </div>

      {/* Shots on target */}
      <div className="flex flex-col items-center mb-2 gap-y-1">
        <div className="flex justify-between w-[300px] md:w-[600px] lg:w-[1000px] mb-0">
          <p className="text-[14px] lg:text-[15px] font-semibold">8</p>
          <p className="text-[14px] lg:text-[15px]">Shots on target</p>
          <p className="text-[14px] lg:text-[15px]">3</p>
        </div>
        <div className="flex justify-center gap-x-2">
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4 flex justify-end">
            <div className="bg-[#1C6DD0] h-[8px] lg:h-[10px] rounded-full w-[72%]"></div>
          </div>
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4">
            <div className="bg-[#FC2947] h-[8px] lg:h-[10px] rounded-full w-[28%]"></div>
          </div>
        </div>
      </div>

      {/* Shots */}
      <div className="flex flex-col items-center mb-2 gap-y-1">
        <div className="flex justify-between w-[300px] md:w-[600px] lg:w-[1000px] mb-0">
          <p className="text-[14px] lg:text-[15px] font-semibold">14</p>
          <p className="text-[14px] lg:text-[15px]">Shots</p>
          <p className="text-[14px] lg:text-[15px]">5</p>
        </div>
        <div className="flex justify-center gap-x-2">
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4 flex justify-end">
            <div className="bg-[#1C6DD0] h-[8px] lg:h-[10px] rounded-full w-[74%]"></div>
          </div>
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4">
            <div className="bg-[#FC2947] h-[8px] lg:h-[10px] rounded-full w-[26%]"></div>
          </div>
        </div>
      </div>

      {/* Passes */}
      <div className="flex flex-col items-center mb-2 gap-y-1">
        <div className="flex justify-between w-[300px] md:w-[600px] lg:w-[1000px] mb-0">
          <p className="text-[14px] lg:text-[15px] font-semibold">550</p>
          <p className="text-[14px] lg:text-[15px]">Passes</p>
          <p className="text-[14px] lg:text-[15px]">255</p>
        </div>
        <div className="flex justify-center gap-x-2">
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4 flex justify-end">
            <div className="bg-[#1C6DD0] h-[8px] lg:h-[10px] rounded-full w-[68%]"></div>
          </div>
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4">
            <div className="bg-[#FC2947] h-[8px] lg:h-[10px] rounded-full w-[32%]"></div>
          </div>
        </div>
      </div>

      {/* Tackles */}
      <div className="flex flex-col items-center mb-2 gap-y-1">
        <div className="flex justify-between w-[300px] md:w-[600px] lg:w-[1000px] mb-0">
          <p className="text-[14px] lg:text-[15px]">9</p>
          <p className="text-[14px] lg:text-[15px]">Tackles</p>
          <p className="text-[14px] lg:text-[15px] font-semibold">21</p>
        </div>
        <div className="flex justify-center gap-x-2">
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4 flex justify-end">
            <div className="bg-[#1C6DD0] h-[8px] lg:h-[10px] rounded-full w-[30%]"></div>
          </div>
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4">
            <div className="bg-[#FC2947] h-[8px] lg:h-[10px] rounded-full w-[70%]"></div>
          </div>
        </div>
      </div>

      {/* Clearances */}
      <div className="flex flex-col items-center mb-2 gap-y-1">
        <div className="flex justify-between w-[300px] md:w-[600px] lg:w-[1000px] mb-0">
          <p className="text-[14px] lg:text-[15px]">5</p>
          <p className="text-[14px] lg:text-[15px]">Clearances</p>
          <p className="text-[14px] lg:text-[15px] font-semibold">41</p>
        </div>
        <div className="flex justify-center gap-x-2">
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4 flex justify-end">
            <div className="bg-[#1C6DD0] h-[8px] lg:h-[10px] rounded-full w-[11%]"></div>
          </div>
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4">
            <div className="bg-[#FC2947] h-[8px] lg:h-[10px] rounded-full w-[89%]"></div>
          </div>
        </div>
      </div>

      {/* Fouls */}
      <div className="flex flex-col items-center mb-2 gap-y-1">
        <div className="flex justify-between w-[300px] md:w-[600px] lg:w-[1000px] mb-0">
          <p className="text-[14px] lg:text-[15px]">6</p>
          <p className="text-[14px] lg:text-[15px]">Fouls</p>
          <p className="text-[14px] lg:text-[15px] font-semibold">13</p>
        </div>
        <div className="flex justify-center gap-x-2">
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4 flex justify-end">
            <div className="bg-[#1C6DD0] h-[8px] lg:h-[10px] rounded-full w-[32%]"></div>
          </div>
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4">
            <div className="bg-[#FC2947] h-[8px] lg:h-[10px] rounded-full w-[68%]"></div>
          </div>
        </div>
      </div>

      {/* Yellow cards */}
      <div className="flex flex-col items-center mb-2 gap-y-1">
        <div className="flex justify-between w-[300px] md:w-[600px] lg:w-[1000px] mb-0">
          <p className="text-[14px] lg:text-[15px]">1</p>
          <p className="text-[14px] lg:text-[15px]">Yellow cards</p>
          <p className="text-[14px] lg:text-[15px] font-semibold">2</p>
        </div>
        <div className="flex justify-center gap-x-2">
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4 flex justify-end">
            <div className="bg-[#1C6DD0] h-[8px] lg:h-[10px] rounded-full w-[33%]"></div>
          </div>
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4">
            <div className="bg-[#FC2947] h-[8px] lg:h-[10px] rounded-full w-[67%]"></div>
          </div>
        </div>
      </div>

      {/* Offsides */}
      <div className="flex flex-col items-center mb-2 gap-y-1">
        <div className="flex justify-between w-[300px] md:w-[600px] lg:w-[1000px] mb-0">
          <p className="text-[14px] lg:text-[15px]">1</p>
          <p className="text-[14px] lg:text-[15px]">Offsides</p>
          <p className="text-[14px] lg:text-[15px]">1</p>
        </div>
        <div className="flex justify-center gap-x-2">
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4 flex justify-end">
            <div className="bg-[#1C6DD0] h-[8px] lg:h-[10px] rounded-full w-[50%]"></div>
          </div>
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4">
            <div className="bg-[#FC2947] h-[8px] lg:h-[10px] rounded-full w-[50%]"></div>
          </div>
        </div>
      </div>

      {/* Corners */}
      <div className="flex flex-col items-center mb-2 gap-y-1">
        <div className="flex justify-between w-[300px] md:w-[600px] lg:w-[1000px] mb-0">
          <p className="text-[14px] lg:text-[15px] font-semibold">6</p>
          <p className="text-[14px] lg:text-[15px]">Corners</p>
          <p className="text-[14px] lg:text-[15px]">0</p>
        </div>
        <div className="flex justify-center gap-x-2">
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4 flex justify-end">
            <div className="bg-[#1C6DD0] h-[8px] lg:h-[10px] rounded-full w-[100%]"></div>
          </div>
          <div className="w-[150px] md:w-[300px] lg:w-[500px] bg-gray-200 rounded-full h-[8px] lg:h-[10px] mb-4">
            <div className="bg-[#FC2947] h-[8px] lg:h-[10px] rounded-full w-[0%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
