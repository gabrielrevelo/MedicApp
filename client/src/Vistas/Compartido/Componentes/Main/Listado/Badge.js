import React from "react";

export default function DoctorBadge({id, name, image, specialties, address, phoneNumber}) {
  return (
    <div className="">
    <div className="bg-white w-[500px] h-fit p-2 rounded flex flex-row justify-between" key={id}>
      <div>
      <img src ={image} alt ='doctor' className="w-40 h-40 rounded-full object-cover border-solid border-2 border-[#1479FF] m-2 "></img>
      </div>
      <div className="w-72 flex flex-col gap-4 justify-center	 flex-wrap  ">
      <h3 className="font-poppins ">{name}</h3>
      <h3 className="flex flex-wrap font-raleway text-[#292f536f]">{specialties}</h3>
      </div>
      <div>
        <span>{address}</span> {/*Display block */}
        <span>{phoneNumber}</span>
      </div>
    </div>
    </div>
  );
}
