import React from "react";

const InfoData = ({ className, text, icon, dato }) => {
  return (
    <div className={className}>
      <div>
        <p className="text-[#F1F2F6] font-poppins text-base">{text}</p>
        <span className="font-poppins text-3xl text-white">{dato}</span>
      </div>
      <div className="bg-[#f1f2f64d] rounded-2xl w-14 h-14 flex justify-center items-center">
        <span className="text-white text-3xl">{icon}</span>
      </div>
    </div>
  );
};

export default InfoData;
