import React from "react";
import Away from "./Lineup/Away";
import Home from "./Lineup/Home";

const Lineup = () => {
  return (
    <div className="w-[287px] md:w-[402px] lg:w-[575px] h-[422px] md:h-[591px] lg:h-[845px] p-2 lg:p-4 bg-lapang bg-center bg-cover bg-no-repeat text-white flex flex-col gap-y-4">
      {/* Lineup Home */}
      <Home />
      <Away />
    </div>
  );
};

export default Lineup;
