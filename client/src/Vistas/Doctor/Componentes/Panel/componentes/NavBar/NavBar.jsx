import IconHome from "./iconHome";
import homeSvg from "../../Assets/home-icon.svg";
import appoimentSvg from "../../Assets/date-icon.svg";
import editSvg from "../../Assets/set.svg";

export default function NavBar({ setSection }) {
  return (
    <>
      <div className="hidden justify-evenly sm:flex">
        <div className="w-[200px] bg-[#292F53] px-5 py-[10px] flex min-h-screen flex-col items-center shadow-2xl">
          <IconHome />
          <hr className="m-2 border-solid border-1 border-white w-2/3"></hr>
          <div className="flex flex-col gap-16 mt-12">
            <div className="flex gap-2">
              <img src={homeSvg} alt="img-icon-menu" className="h-5 w-6"/>
              <button
                className=" text-base text-white rounded "
                onClick={() => setSection("principal")}
              >
                Principal
              </button>
            </div>
            <div className="flex gap-2">
              <img src={editSvg} alt="img-icon-menu" className="h-5 w-6"/>
              <button
                className=" text-base text-white rounded "
                onClick={() => setSection("editarPerfil")}
              >
                Editar Perfil
              </button>
            </div>
            <div className="flex gap-2">
              <img src={appoimentSvg} alt="img-icon-menu" className="h-5 w-6"/>
              <button
                className=" text-base text-white rounded "
                onClick={() => setSection("citas")}
              >
                Citas
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
