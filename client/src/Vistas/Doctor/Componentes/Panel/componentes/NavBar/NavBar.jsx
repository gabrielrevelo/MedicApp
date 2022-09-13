import IconHome from "./iconHome";

export default function NavBar({ setSection }) {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="w-[200px] bg-[#292F53] px-5 py-[10px] flex h-screen flex-col items-center shadow-2xl">
          <IconHome />
          <hr className="m-2 border-solid border-1 border-white w-2/3"></hr>
          <button
            className="font-poppins text-lg text-white rounded w-40 h-10  mr-3 ml-3 mt-10 mb-9"
            onClick={() => setSection("principal")}
          >
            Principal
          </button>
          <button
            className="font-poppins text-lg text-white rounded w-40 h-10  mr-3 ml-3 mt-10 mb-9"
            onClick={() => setSection("editarPerfil")}
          >
            Editar Perfil
          </button>
          <button
            className="font-poppins text-lg text-white rounded w-40 h-10  mr-3 ml-3 mt-10 mb-9"
            onClick={() => setSection("citas")}
          >
            Citas
          </button>
          <button
            className="font-poppins text-lg text-white rounded w-40 h-10  mr-3 ml-3 mt-10 mb-9"
            onClick={() => setSection("reseñas")}
          >
            Reseñas
          </button>
          <button
            className="font-poppins text-lg text-white rounded w-40 h-10  mr-3 ml-3 mt-10 mb-9"
            onClick={() => setSection("agenda")}
          >
            Mi Agenda
          </button>
        </div>
      </div>
    </>
  );
}
