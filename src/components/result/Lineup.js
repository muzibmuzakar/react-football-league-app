import React from "react";
import Away from "./Lineup/Away";
import Home from "./Lineup/Home";
import Expose from "../../assets/img/logo/expose.png";
import Xtujuh from "../../assets/img/logo/x17.png";

import { lineup } from "../../data";

const Lineup = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center lg:items-start gap-8">
      <div className="w-[287px] md:w-[402px] lg:min-w-[575px] h-[422px] md:h-[591px] lg:h-[845px] p-2 lg:p-4 bg-lapang bg-center bg-cover bg-no-repeat text-white flex flex-col gap-y-4">
        {/* Lineup Home */}
        <Home />
        <Away />
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between items-start gap-x-4 gap-y-10 mb-8">
        {/* home */}
        <div className="flex flex-col w-full gap-2 lg:gap-4">
          {/* team */}
          <div className="flex text-center items-center gap-x-4 mb-2">
            <img
              src={Expose}
              className="lg:h-[60px] h-[40px]"
              alt="home logo"
            />
            <h2 className="font-semibold lg:text-[22px] text-[20px] lg:w-auto w-[120px] line-clamp-1">
              Expose FC
            </h2>
          </div>

          {/* GK */}
          <div className="flex flex-col">
            {/* heading */}
            <h2 className="font-semibold text-[18px] lg:w-auto w-[120px] line-clamp-1">
              Goalkeeper
            </h2>
            {/* player */}
            {lineup.map((lineup, index) => {
              if (lineup.position === "GK") {
              return (
                <div className="flex items-center gap-x-4 w-full border-b border-[#b8b8b8] py-2" key={index}>
                  <img
                    src={lineup.foto}
                    className="lg:w-[50px] w-[40px]"
                    alt="Player"
                  />
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.np}
                  </h2>
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.name}
                  </h2>
                </div>
              );} else {
                return null;
              }
            })}
          </div>

          {/* DF */}
          <div className="flex flex-col">
            {/* heading */}
            <h2 className="font-semibold text-[18px] line-clamp-1">
              Defenders
            </h2>
            {/* player */}
            {lineup.map((lineup, index) => {
              if (lineup.position === "RB" || lineup.position === "CB" || lineup.position === "LB") {
              return (
                <div className="flex items-center gap-x-4 w-full border-b border-[#b8b8b8] py-2" key={index}>
                  <img
                    src={lineup.foto}
                    className="lg:w-[50px] w-[40px]"
                    alt="Player"
                  />
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.np}
                  </h2>
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.name}
                  </h2>
                </div>
              );} else {
                return null;
              }
            })}
          </div>

          {/* MF */}
          <div className="flex flex-col">
            {/* heading */}
            <h2 className="font-semibold text-[18px] line-clamp-1">
              Midfielders
            </h2>
            {/* player */}
            {lineup.map((lineup, index) => {
              if (lineup.position === "DM" || lineup.position === "CM" || lineup.position === "CAM" || lineup.position === "RM" || lineup.position === "LM" || lineup.position === "RAM" || lineup.position === "LAM") {
              return (
                <div className="flex items-center gap-x-4 w-full border-b border-[#b8b8b8] py-2" key={index}>
                  <img
                    src={lineup.foto}
                    className="lg:w-[50px] w-[40px]"
                    alt="Player"
                  />
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.np}
                  </h2>
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.name}
                  </h2>
                </div>
              );} else {
                return null;
              }
            })}
          </div>

          {/* Forward */}
          <div className="flex flex-col">
            {/* heading */}
            <h2 className="font-semibold text-[18px] line-clamp-1">
              Forwards
            </h2>
            {/* player */}
            {lineup.map((lineup, index) => {
              if (lineup.position === "RFW" || lineup.position === "CF" || lineup.position === "LFW") {
              return (
                <div className="flex items-center gap-x-4 w-full border-b border-[#b8b8b8] py-2" key={index}>
                  <img
                    src={lineup.foto}
                    className="lg:w-[50px] w-[40px]"
                    alt="Player"
                  />
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.np}
                  </h2>
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.name}
                  </h2>
                </div>
              );} else {
                return null;
              }
            })}
          </div>
        </div>

        {/* away */}
        <div className="flex flex-col w-full lg:text-right gap-2 lg:gap-4">
          {/* team */}
          <div className="flex lg:flex-row-reverse text-center items-center gap-x-4 mb-2">
            <img
              src={Expose}
              className="lg:h-[60px] h-[40px]"
              alt="home logo"
            />
            <h2 className="font-semibold lg:text-[22px] text-[20px] lg:w-auto w-[120px] line-clamp-1">
              Expose FC
            </h2>
          </div>

          {/* GK */}
          <div className="flex flex-col">
            {/* heading */}
            <h2 className="font-semibold text-[18px] lg:w-auto w-[120px] line-clamp-1">
              Goalkeeper
            </h2>
            {/* player */}
            {lineup.map((lineup, index) => {
              if (lineup.position === "GK") {
              return (
                <div className="flex lg:flex-row-reverse items-center gap-x-4 w-full border-b border-[#b8b8b8] py-2" key={index}>
                  <img
                    src={lineup.foto}
                    className="lg:w-[50px] w-[40px]"
                    alt="Player"
                  />
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.np}
                  </h2>
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.name}
                  </h2>
                </div>
              );} else {
                return null;
              }
            })}
          </div>

          {/* DF */}
          <div className="flex flex-col">
            {/* heading */}
            <h2 className="font-semibold text-[18px] line-clamp-1">
              Defenders
            </h2>
            {/* player */}
            {lineup.map((lineup, index) => {
              if (lineup.position === "RB" || lineup.position === "CB" || lineup.position === "LB") {
              return (
                <div className="flex lg:flex-row-reverse items-center gap-x-4 w-full border-b border-[#b8b8b8] py-2" key={index}>
                  <img
                    src={lineup.foto}
                    className="lg:w-[50px] w-[40px]"
                    alt="Player"
                  />
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.np}
                  </h2>
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.name}
                  </h2>
                </div>
              );} else {
                return null;
              }
            })}
          </div>

          {/* MF */}
          <div className="flex flex-col">
            {/* heading */}
            <h2 className="font-semibold text-[18px] line-clamp-1">
              Midfielders
            </h2>
            {/* player */}
            {lineup.map((lineup, index) => {
              if (lineup.position === "DM" || lineup.position === "CM" || lineup.position === "CAM" || lineup.position === "RM" || lineup.position === "LM" || lineup.position === "RAM" || lineup.position === "LAM") {
              return (
                <div className="flex lg:flex-row-reverse items-center gap-x-4 w-full border-b border-[#b8b8b8] py-2" key={index}>
                  <img
                    src={lineup.foto}
                    className="lg:w-[50px] w-[40px]"
                    alt="Player"
                  />
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.np}
                  </h2>
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.name}
                  </h2>
                </div>
              );} else {
                return null;
              }
            })}
          </div>

          {/* Forward */}
          <div className="flex flex-col">
            {/* heading */}
            <h2 className="font-semibold text-[18px] line-clamp-1">
              Forwards
            </h2>
            {/* player */}
            {lineup.map((lineup, index) => {
              if (lineup.position === "RFW" || lineup.position === "CF" || lineup.position === "LFW") {
              return (
                <div className="flex lg:flex-row-reverse items-center gap-x-4 w-full border-b border-[#b8b8b8] py-2" key={index}>
                  <img
                    src={lineup.foto}
                    className="lg:w-[50px] w-[40px]"
                    alt="Player"
                  />
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.np}
                  </h2>
                  <h2 className="font-semibold text-[18px] line-clamp-1">
                    {lineup.name}
                  </h2>
                </div>
              );} else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lineup;
