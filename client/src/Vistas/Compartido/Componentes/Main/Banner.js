import { HiOutlineClipboardList, HiOutlineSearchCircle,HiOutlineBadgeCheck } from "react-icons/hi";
import Icon3 from "../../imagenes compartidas/icon3.png";
import Icon2 from "../../imagenes compartidas/icon2.png";
import Icon1 from "../../imagenes compartidas/icon1.png";


export default function Banner(){
return(
    <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-[#F1F2F6]'>
        <div className='text-center bg-blue-500 text-medium p-10'>
{/*         <h2 className="flex justify-center"><HiOutlineClipboardList/></h2> */}
        <h3 className='font-bold flex justify-center items-center gap-3 pb-4 text-lg'> <img src={Icon1} alt="icon-services" className="w-11"/>Encuentra tu Especialista</h3>
        <p className='text-center text-base'>Las opiniones reales de miles de pacientes te ayudarán a tomar siempre la mejor decisión.</p>
        </div>
        <div className='text-center text-medium bg-[#292F53] p-10'>
{/*         <h2 className="flex justify-center"><HiOutlineSearchCircle/></h2> */}
        <h3 className='font-bold flex justify-center items-center gap-3 pb-4 text-lg'> <img src={Icon2} alt="icon-services" className="w-11"/> Pide cita de forma fácil</h3>
        <p className='text-center text-base'>Elige la hora que prefieras y pide tu cita sin necesidad de llamar. Es fácil y muy cómodo.</p>
        </div>
        <div className='text-center bg-blue-500 text-medium p-10 '>
{/*         <h2 className="flex justify-center"><HiOutlineBadgeCheck/></h2> */}
        <h3 className='font-bold flex justify-center items-center gap-3 pb-4 text-lg'> <img src={Icon3} alt="icon-services" className="w-11"/> Sin costes añadidos</h3>
        <p className='text-center text-base'>La reserva de citas es un servicio gratuito brindado por Medic App.</p>
        </div>
    </section>
)
}
