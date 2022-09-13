import react from 'react'
export default function Footer(){
return(
        <footer className="text-center bg-indigo-100 pt-2 pb-2">
            <div className='grid grid-cols-3 gap-4'>
                <div>
                    <aside>
                        <div>Servicios</div>
                        <ul className=" dark:text-slate-400"><li><a>Quienes Somos</a></li>
                        <li><a>Contacto</a></li>
                        </ul>
                    </aside>
                </div>
                <div>
                    <aside>
                        <div>Para Pacientes</div>
                        <ul className=" dark:text-slate-400"><li><a>Especialistas</a></li>
                        <li><a>Clinicas</a></li>
                        </ul>
                    </aside>
                </div>
                <div>
                    <aside>
                        <div>Para Doctores</div>
                        <ul className=" dark:text-slate-400"><li><a>para especialistas</a></li>
                        <li><a>Clinicas</a></li>
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