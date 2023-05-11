import React from "react";
import { lineup } from "../../../data";

const Away = () => {
  return (
    <div className="w-full h-[200px] lg:h-[400px] flex flex-col justify-between">
      {/* Forward */}
      <div className="grid grid-cols-5 gap-x-4 ">
        {/* RFW */}
        <div className="grid place-items-center">
          {lineup.map((lineup, index) => {
            if (lineup.position === "RFW") {
              return (
                <div className="flex justify-center w-[40px]" key={index}>
                  <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                    <p className="text-[10px] lg:text-[13px] font-semibold">
                      {lineup.np}
                    </p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        {/* CF */}
        <div className="col-start-2 col-span-3">
          <div className="grid grid-flow-col gap-x-4 place-items-center">
            {lineup.map((lineup, index) => {
              if (lineup.position === "CF") {
                return (
                  <div className="" key={index}>
                    <div className="flex justify-center w-[40px]">
                      <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                        <p className="text-[10px] lg:text-[13px] font-semibold">
                          {lineup.np}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>

        {/* LFW */}
        <div className="grid place-items-center">
          {lineup.map((lineup, index) => {
            if (lineup.position === "LFW") {
              return (
                <div className="flex justify-center w-[40px]" key={index}>
                  <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                    <p className="text-[10px] lg:text-[13px] font-semibold">
                      {lineup.np}
                    </p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      {/* RAM CAM LAM */}
      <div className="grid grid-cols-5 gap-x-4 ">
        {/* RAM */}
        <div className="grid place-items-center">
          {lineup.map((lineup, index) => {
            if (lineup.position === "RAM") {
              return (
                <div className="flex justify-center w-[40px]" key={index}>
                  <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                    <p className="text-[10px] lg:text-[13px] font-semibold">
                      {lineup.np}
                    </p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        {/* CAM */}
        <div className="col-start-2 col-span-3">
          <div className="grid grid-flow-col gap-x-4 place-items-center">
            {lineup.map((lineup, index) => {
              if (lineup.position === "CAM") {
                return (
                  <div className="" key={index}>
                    <div className="flex justify-center w-[40px]">
                      <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                        <p className="text-[10px] lg:text-[13px] font-semibold">
                          {lineup.np}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>

        {/* LAM */}
        <div className="grid place-items-center">
          {lineup.map((lineup, index) => {
            if (lineup.position === "LAM") {
              return (
                <div className="flex justify-center w-[40px]" key={index}>
                  <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                    <p className="text-[10px] lg:text-[13px] font-semibold">
                      {lineup.np}
                    </p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      {/* Mid */}
      <div className="grid grid-cols-5 gap-x-4 ">
        {/* RM */}
        <div className="grid place-items-center">
          {lineup.map((lineup, index) => {
            if (lineup.position === "RM") {
              return (
                <div className="flex justify-center w-[40px]" key={index}>
                  <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                    <p className="text-[10px] lg:text-[13px] font-semibold">
                      {lineup.np}
                    </p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        {/* CM */}
        <div className="col-start-2 col-span-3">
          <div className="grid grid-flow-col gap-x-4 place-items-center">
            {lineup.map((lineup, index) => {
              if (lineup.position === "CM") {
                return (
                  <div className="" key={index}>
                    <div className="flex justify-center w-[40px]">
                      <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                        <p className="text-[10px] lg:text-[13px] font-semibold">
                          {lineup.np}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>

        {/* LM */}
        <div className="grid place-items-center">
          {lineup.map((lineup, index) => {
            if (lineup.position === "LM") {
              return (
                <div className="flex justify-center w-[40px]" key={index}>
                  <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                    <p className="text-[10px] lg:text-[13px] font-semibold">
                      {lineup.np}
                    </p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      {/* DM / RWB / LWB */}
      <div className="grid grid-cols-5 gap-x-4 ">
        {/* RWB */}
        <div className="grid place-items-center">
          {lineup.map((lineup, index) => {
            if (lineup.position === "RWB") {
              return (
                <div className="flex justify-center w-[40px]" key={index}>
                  <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                    <p className="text-[10px] lg:text-[13px] font-semibold">
                      {lineup.np}
                    </p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        {/* DM */}
        <div className="col-start-2 col-span-3">
          <div className="grid grid-flow-col gap-x-4 place-items-center">
            {lineup.map((lineup, index) => {
              if (lineup.position === "DM") {
                return (
                  <div className="" key={index}>
                    <div className="flex justify-center w-[40px]">
                      <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                        <p className="text-[10px] lg:text-[13px] font-semibold">
                          {lineup.np}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>

        {/* LWB */}
        <div className="grid place-items-center">
          {lineup.map((lineup, index) => {
            if (lineup.position === "LWB") {
              return (
                <div className="flex justify-center w-[40px]" key={index}>
                  <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                    <p className="text-[10px] lg:text-[13px] font-semibold">
                      {lineup.np}
                    </p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      {/* DF */}
      <div className="grid grid-cols-5 gap-x-4 ">
        {/* RB */}
        <div className="grid place-items-center">
          {lineup.map((lineup, index) => {
            if (lineup.position === "RB") {
              return (
                <div className="flex justify-center w-[40px]" key={index}>
                  <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                    <p className="text-[10px] lg:text-[13px] font-semibold">
                      {lineup.np}
                    </p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        {/* CB */}
        <div className="col-start-2 col-span-3">
          <div className="grid grid-flow-col gap-x-4 place-items-center">
            {lineup.map((lineup, index) => {
              if (lineup.position === "CB") {
                return (
                  <div className="" key={index}>
                    <div className="flex justify-center w-[40px]">
                      <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                        <p className="text-[10px] lg:text-[13px] font-semibold">
                          {lineup.np}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>

        {/* LB */}
        <div className="grid place-items-center">
          {lineup.map((lineup, index) => {
            if (lineup.position === "LB") {
              return (
                <div className="flex justify-center w-[40px]" key={index}>
                  <div className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full">
                    <p className="text-[10px] lg:text-[13px] font-semibold">
                      {lineup.np}
                    </p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      {/* GK */}
      <div className="flex justify-center">
        {lineup.map((lineup, index) => {
          if (lineup.position === "GK") {
            return (
              <div
                className="bg-[#FC2947] w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex items-center justify-center rounded-full"
                key={index}
              >
                <p className="text-[10px] lg:text-[13px] font-semibold">
                  {lineup.np}
                </p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Away;
