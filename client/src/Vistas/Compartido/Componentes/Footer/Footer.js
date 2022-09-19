import react from 'react'
import {Link} from 'react-router-dom'
export default function Footer(){
return(
        <footer className="text-center bg-indigo-100 pt-2 pb-2">
            <div className='grid grid-cols-3 gap-4'>
                <div>
                    <aside class=" text-left ml-[200px] mt-[20px] bg-blue-500 w-[100%] rounded p-2">
                        <ul className=" dark:text-slate-400">
                        <li><Link className='text-white hover:text-blue-900 font-poppins text-[25px]'  to = "/servicios">
                        Servicios
                        </Link></li>
                        
                        <li><Link className='text-white hover:text-blue-900 font-poppins text-[25px]'  to = "/somos">
                        Quienes somos
                        </Link></li>
                        
                        <li><Link className='text-white hover:text-blue-900 font-poppins text-[25px]'  to = "/contacto">
                        Contactanos
                        </Link></li>
                       
                      
                  
                        </ul>
                    </aside>
                </div>
                
              
               
            </div>
            <hr className='my-3'/>
            <div>
            <p className=" dark:text-slate-400">
				www.MedicApp.com © 2022 -
				Encontrá tu especialista y pedí turno
			    </p>
                </div>
        </footer>
)
}