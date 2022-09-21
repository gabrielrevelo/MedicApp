import { HiLocationMarker } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import TopDoctors from "../../../../../Compartido/Componentes/TopDoctors/TopDoctors";
import icon from "../../Assets/ico-dark.png"

const Main = ({ doctor }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="flex gap-2 text-[#292F53] text-xl font-poppins mb-5">
        <img src={icon} alt="icon" className="w-7 h-7"/>
        Asi apareces en MedicApp:
      </p>
      {doctor ? (
        <div className="scale-75 sm:w-1/3 sm:scale-100 w-full flex justify-center">
          <TopDoctors
            key={doctor._id}
            id={doctor._id}
            name={doctor.name}
            specialities={doctor.specialities}
            rating={doctor.rating}
            schedule={doctor.schedule.hour}
            address={doctor.address.split(",").slice(0, doctor.address.split(",").length-2).join(",")}
            image={doctor.image}
            price={doctor.checkUpPrice}
            details={"Full"}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Main;
