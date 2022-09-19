import { Link } from "react-router-dom";
import icon from "./iconimg/ico-dark.png"


export default function Servicios() {
  return (
    <div className="">
      <div className="h-[100px] bg-indigo-100 p-4">
        <Link
          className=""
          to="/"
        >
          <img class="h-[60px] ml-[50px]" src={icon}/>
        </Link>
      </div>
      <div className="flex flex-col justify-center align-middle text-center">
        <br />
        <label className="text-[30px] font-poppins">Servicios</label>
        <br />
        <div className="flex-col p-6 text-[30px] font-poppins text-center align-middle border-gray-400 rounded border-[1px] bg-blue-500 text-cyan-500 justify-center w-[90%] self-center">
          MedicApp te provee servicios medicos
           de las siguientes ramas.
          <br />
          <br />
          <div className="text-[#292F53] text-xl font-poppins mb-5 ">
            <label className="text-gray-500">Ecografía</label>

            <div className="flex flex-row text-left m-5 text-blue-500  ">
              <p className="text-justify text-white  text-[15px]">
                {" "}
                Es una prueba muy segura porque no usa radiación. La técnica se
                hace con ondas sonoras de alta frecuencia emitidas por un
                transductor (una especie de micrófono) que, al rebotar en el
                cuerpo, son detectadas por el aparato. Una computadora procesa
                las ondas reflejadas y produce imágenes. La ecografía permite
                que el médico vea el corazón, los vasos sanguíneos, los riñones,
                la vesícula, el hígado, el páncreas, el bazo y el tracto
                genital. También se usa para examinar los fetos mientras crecen
                en el útero y, además, puede examinar el flujo sanguíneo viendo
                si existen o no obstrucciones de los vasos. El transductor se
                pasa por la zona que se quiere examinar, poniendo en él una
                sustancia gelatinosa (como vaselina) que ayuda que las ondas se
                transmitan correctamente. La sustancia puede estar fría pero la
                exploración no es ni dolorosa ni incómoda en la mayoría de los
                casos. Algunas veces hay que cambiar de postura en varias
                ocasiones para tener imágenes más claras. Según la parte del
                cuerpo que se quiera ver, puede ser necesario estar en ayunas
                antes de la prueba (sobre todo para ver el hígado y la vesícula
                biliar) o tener la vejiga llena (para ver el aparato urinario o
                genital). La duración de la prueba varía en función de la zona
                investigada y de si las estructuras se visualizan bien o no. Por
                lo general, tarda una media hora.
              </p>
            </div>
            <label className="text-gray-500">Cardiología</label>

            <div className="flex flex-row text-left m-5 text-blue-500  ">
              <p className="text-justify text-white  text-[15px]">
                {" "}
                El Servicio de Cardiología Clínica ambulatoria brinda
                diagnóstico y tratamiento para todo el espectro de enfermedades
                cardiovasculares. Cuenta con equipos multidisciplinarios de
                trabajo con amplia experiencia en cada una de las
                subespecialidades de la Cardiología y la tecnología más avanzada
                en métodos diagnósticos. La historia clínica informatizada nos
                ha permitido mejorar la comunicación con los médicos de cabecera
                y los pacientes y agilizar los tiempos de respuesta. Se atienden
                pacientes con los más diversos problemas cardiovasculares como
                enfermedades de las arterias coronarias, de la aorta, de las
                válvulas cardíacas, arritmias, insuficiencia cardíaca,
                hipertensión arterial, alteraciones del colesterol y los
                lípidos, enfermedades de las arterias periféricas, etc. Cuando
                el caso lo requiere, el paciente es derivado para la atención
                por un especialista en algunas de estas subespecialidades. El
                nivel de excelencia se sostiene con planes permanentes de
                formación continua, intensa actividad docente, cursos de
                actualización, ateneos, discusiones de casos, presentaciones en
                congresos de la especialidad, entre otras actividades
                científicas. Contamos con grupos especializados en algunas
                enfermedades poco frecuentes como la miocardiopatía
                hipertrófica, síndrome de Marfan, enfermedades del pericardio y
                tumores cardíacos.
              </p>
            </div>
            <label className="text-gray-500">Ginecología</label>

            <div className="flex flex-row text-left m-5 text-blue-500  ">
              <p className="text-justify text-white text-[15px]">
                {" "}
                La ginecología es una especialidad de la medicina que se centra
                en el estudio del sistema reproductor femenino. Los
                profesionales que se ocupan de esta especialidad se conocen como
                ginecólogos, que son los especialistas que atienden todas las
                patologías relacionadas con los órganos femeninos como el útero,
                la vagina y los ovarios, y también de la prevención de
                enfermedades futuras. En el ámbito de la ginecología, se
                acompaña a la mujer a lo largo de toda su vida, desde la
                menarquía hasta la menopausia, para garantizar el buen
                funcionamiento de sus órganos reproductivos.
              </p>
            </div>
            <label className="text-gray-500">Dermatología</label>

            <div className="flex flex-row text-left m-5 text-blue-500  ">
              <p className="text-justify text-white text-[15px]">
                Dermatología Información del Servicio | Equipo de Salud |
                Prestaciones Presentación El área de Dermatologia brinda
                atención a adultos mayores de 16 años con enfermedades en piel,
                pelos y uñas, por consultorio externo y realiza cirugías
                dermatológicas menores que incluye, biopsias de piel y mucosas,
                extirpación de lesiones benignas y malignas, también el uso de
                aparatología como electrocoagulación y crioterapia, uso de
                productos químicos como ciertos ácidos, y cuando la patología,
                como tumores malignos, lo requiere realizamos cirugía de MOHS,
                que es de alta complejidad. Es centro formador de especialistas
                en Dermatologia de la Escuela de Especialistas del Ministerio de
                Salud de la Provincia y del Posgrado de Dermatologia de la UCC.
                Realizándose también actividad científica como Ateneos
                Bibliográficos y Ateneos clínicos buscando la capacitación y
                perfeccionamiento de los profesionales que integran el equipo de
                Dermatologías y de los profesionales en formación de la
                especialidad.
              </p>
            </div>
            <label className="text-gray-500">Gastroenterología</label>

            <div className="flex flex-row text-left m-5 text-blue-500  ">
              <p className="text-justify text-white  text-[15px]">
                El Servicio de Gastroenterología y Endoscopia Digestiva es un
                equipo integrado por especialistas con una amplia preparación
                profesional y científica que desarrolla sus actividades en
                instalaciones equipadas con un moderno instrumental endoscópico
                realizando una constante actualización técnica y científica.
                Cuenta con más de años de experiencia en el cuidado de la salud,
                ofreciendo una asistencia médica integral, personalizada y
                humana con el objetivo permanente de brindar diagnósticos y
                tratamientos precisos en diversas patologías digestivas teniendo
                en cuenta las características de cada paciente.
              </p>
            </div>
            <label className="text-gray-500">Medicina General</label>

            <div className="flex flex-row text-left m-5 text-blue-500  ">
              <p className="text-justify text-white text-[15px]">
                La medicina general constituye el primer nivel de atención
                médica y es imprescindible para la prevención, detección,
                tratamiento y seguimiento de las enfermedades crónicas
                estabilizadas, responsabilizándose del paciente en su conjunto,
                para decidir su derivación a los especialistas cuando alguna
                patología se descompense. ​En HM Vallés ponemos a disposición de
                nuestros pacientes, entre otros, los siguientes servicios:
                Reconocimientos médicos generales personalizados según edad,
                antecedentes personales y familiares y dependiendo del nivel de
                riesgo de cada paciente. Prevención de enfermedades mediante
                campañas de vacunación e información (consejos sobre hábitos,
                normas de higiene, alimentación saludable, etc.) Control y
                seguimiento de enfermedades crónicas. Controles periódicos de
                determinados parámetros como glucosa, tensión, colesterol, etc.,
                en personas con factores de riesgo para evitar las consecuencias
                de estas enfermedades.
              </p>
            </div>
            <label className="text-gray-500">Alergología</label>

            <div className="flex flex-row text-left m-5 text-blue-500  ">
              <p className="text-justify text-white  text-[15px]">
                La alergología es la especialidad que comprende el conocimiento,
                diagnóstico y tratamiento de la patología producida por
                mecanismos inmunológicos, con especial atención en la alergia .
                La alergia es una alteración de los mecanismos de defensa
                inmunitarios del organismo. El paciente alérgico tiene una
                predisposición a reaccionar de una manera diferente a los no
                alérgicos ante diversas sustancias con las cuales estamos
                habitualmente en contacto. Estas sustancias, llamadas alergenos
                o antígenos, son sumamente variadas: alimentos , medicamentos,
                sustancias que penetran al organismo por la nariz y los
                bronquios (polvo, pólenes, hongos de la humedad entre otros ) En
                el organismo, además de los anticuerpos que nos defienden de las
                infecciones, existen otros tipos de anticuerpos, como los
                anticuerpos IgE que están habitualmente aumentados en los
                alérgicos y que son los responsables de la producción de los
                síntomas alérgicos . Al ingresar al organismo las sustancias a
                las cuales el paciente es alérgico, se ponen en contacto con los
                anticuerpos IgE , produciéndose la reacción alérgica. El lugar
                del organismo en el que se produce la reacción alérgica se
                denomina Órgano de Choque. Según cuál sea el órgano de choque,
                se producirán las distintas enfermedades alérgicas: así, por
                ejemplo, si el órgano de choque es el bronquio se producirá un
                broncoespasmo; si es la nariz se producirá una rinitis alérgica;
                si es la piel se producirá el eczema, la urticaria o las
                dermatitis de contacto. Estas son las enfermedades alérgicas más
                comunes.
              </p>
            </div>
            <label className="text-gray-500">Oncológica</label>

            <div className="flex flex-row text-left m-5 text-blue-500  ">
              <p className="text-justify  text-white text-[15px]">
                El tratamiento oncológico es el uso de cirugías, radiación,
                medicamentos y otras terapias para curar el cáncer, encoger un
                cáncer o detener la progresión de un cáncer. Existen muchos
                tratamientos oncológicos. Según tu situación en particular,
                puedes recibir un tratamiento o una combinación de tratamientos.
                El objetivo del tratamiento oncológico es lograr una cura para
                el cáncer, de modo que puedas tener una expectativa de vida
                normal. Esto podría suceder o no, según tu situación específica.
                Si no es posible lograr una cura, tus tratamientos podrían
                usarse para reducir el cáncer o retrasar su crecimiento, para
                permitirte vivir sin síntomas el mayor tiempo posible.
              </p>
            </div>
            <label className="text-gray-500">Hematología</label>

            <div className="flex flex-row text-left m-5 text-blue-500  ">
              <p className="text-justify text-white  text-[15px]">
                En el Servicio de Hematología atendemos, controlamos y
                realizamos tratamientos de pacientes adultos con patologías de
                la sangre, ganglios linfáticos, médula ósea, entre otros.
                Atendemos hematología general y control de anticoagulación.
                También realizamos: Atención onco-hematológica Diagnóstico,
                tratamiento y seguimiento de pacientes ambulatorios e internados
                Procedimientos diagnósticos de baja complejidad: frotis de
                sangre periférica, punción aspiración y biopsia de médula ósea
                No se atienden leucemias agudas, ni se realizan estudios de
                hemostasia y trombosis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
