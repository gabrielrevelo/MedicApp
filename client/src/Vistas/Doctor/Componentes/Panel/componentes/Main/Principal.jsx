import { HiLocationMarker } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";

const Main = ({ doctor }) => {
  return (
    <div>
      <div>
        <p className="text-[#292F53] text-xl font-poppins mb-5">
          Asi apareces en MedicApp:
        </p>
        <div className="flex justify-center">
          <section className="bg-white w-[550px] h-fit flex flex-row p-3 rounded items-center">
            <img
              src={doctor && doctor.image}
              alt={doctor && doctor.name}
              className="w-40 h-40 rounded-full object-cover border-solid border-2 border-[#1479FF] "
            />
            <div className="ml-4">
              <p className="font-poppins tracking-wide mt-1 mb-2 ">
                {doctor && doctor.name}
              </p>
              <p className="font-raleway text-[#292f536f] -mt-2 mb-2  text-xs">
                Licencia: {doctor?.license}
              </p>
              {doctor &&
                doctor.specialities.map((speciality) => {
                  return (
                    <span
                      key={speciality}
                      className="font-raleway text-[#292f536f] mt-1 mb-2 "
                    >
                      {speciality} |{" "}
                    </span>
                  );
                })}
              <p className="font-raleway text-[#292f53b8] text-sm mt-2 mb-2 flex flex-row ">
                {" "}
                <span className="mr-2">
                  <HiLocationMarker />
                </span>{" "}
                {doctor?.city}, <span className="ml-2">{doctor?.country}</span>
              </p>
              <p className="font-raleway text-[#292f536f] mt-2 mb-2 ">
                {" "}
                Precio consulta: {doctor?.checkUpPrice}
              </p>

              <span className="font-raleway w-fit text-[#1479FF] align-middle rounded flex flex-row ">
                {" "}
                <span className="mt-1">
                  <HiOutlinePhone />
                </span>
                :{" "}
                <span className="text-[#1479FF] tracking-[.10em]">
                  {doctor?.phoneNumber}
                </span>{" "}
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Main;
