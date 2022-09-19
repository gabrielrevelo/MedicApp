import React from "react";
import NavBar from "../Header/NavBar";
import styles from "./AboutUs.module.css";
import vectorAbout from "../../imagenes compartidas/vector-about.png";
import iconLinkedin from "../../imagenes compartidas/linkein-icon.svg";
import iconGithub from "../../imagenes compartidas/github-icon.svg";

const AboutUs = () => {
  const members = [
    {
      name: "Maria Paula Vivi Zuluaga",
      country: "Colombia",
      image: "https://avatars.githubusercontent.com/u/93414460?v=4",
      github: "https://github.com/mariapaulav",
      linkedin: "https://www.linkedin.com/in/mariapaulav/",
    },
    {
      name: "Gabriel Alejandro Revelo Echavarria",
      country: "Colombia",
      image: "https://avatars.githubusercontent.com/u/90431652?v=4",
      github: "https://github.com/GaRev-Dev",
      linkedin: "https://www.linkedin.com/in/gabrielrevelo/",
    },
    {
      name: "Jhon Esteban Velasquez Martinez",
      country: "Colombia",
      image: "https://avatars.githubusercontent.com/u/67343500?v=4",
      github: "https://github.com/jestebanvelasquez",
      linkedin: "https://www.linkedin.com/in/esteban-velasquez-martinez/",
    },
    {
      name: "Jose Eduardo Maldonado Sarmiento",
      country: "Argentina",
      image: "https://avatars.githubusercontent.com/u/74880225?v=4",
      github: "https://github.com/edusar",
      linkedin: "https://www.linkedin.com/in/jose-eduardo-maldonado-sarmiento/",
    },
    {
      name: "Alejandro Valentin Allende",
      country: "Argentina",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFr8Nu9kCC0Lw/profile-displayphoto-shrink_800_800/0/1656606041382?e=1668643200&v=beta&t=IWURSucrhIZORZPZyk3tXtAnNTgtlHUJHe22oBUdQxE",
      github: "https://github.com/ValentinAllende",
      linkedin:
        "https://www.linkedin.com/in/alejandro-valent%C3%ADn-allende-1747b4240/",
    },
    {
      name: "Máximo Solis Farfan",
      country: "Perú",
      image: "https://avatars.githubusercontent.com/u/65838616?v=4",
      github: "https://github.com/maxsolfar",
      linkedin: "https://www.linkedin.com/in/maxsolfar/",
    },
  ];

  return (
    <>
      <NavBar />
      <section className={styles.MainContainer}>
        <section className={styles.TopContainer}>
         {/*  <h2 className={styles.TitleCards}>¿Qué es MedicApp?</h2> */}
          <div className={styles.About}>
            <img
              className={styles.VectorAbout}
              src={vectorAbout}
              alt="alt-medicapp"
            />
            <div>
              <h2 className={styles.TitleAbout}>¿Qué es <b>MedicApp</b>?</h2>
              <p className={styles.Text}>
                Queremos que los pacientes encuentren el médico perfecto y
                reserven una cita de la manera más fácil. El viaje del paciente
                debe ser agradable, y por eso estamos siempre junto a ellos:
                para ayudarles a encontrar la mejor atención posible. En
                cualquier momento y lugar. También ayudamos a los médicos a
                gestionar mejor su consulta y a construir su reputación online.
                Con nuestra solución integrada de principio a fin, los médicos
                no sólo pueden mejorar su presencia en línea, sino también
                dedicar su tiempo a lo que realmente importa: sus pacientes.
              </p>
            </div>
          </div>
          <h2 className={styles.TitleCards}>Equipo de <b>Desarrollo</b></h2>
        </section>
        <section className={styles.ContainerCards}>
          {members.map((member, index) => {
            return (
              <section className={styles.Card} key={index}>
                <img
                  src={
                    member.image ||
                    "https://i.blogs.es/01a6e2/the-good-doctor/1366_2000.jpeg"
                  }
                  alt="img-doctor"
                />
                <div className={styles.InfoMember}>
                  <h3>{member.name}</h3>
                  <span>{member.country}</span>
                  <div>
                    <a target="_blank" rel="noreferrer" href={member.github}><img src={iconGithub} alt="alt-github-icon"/></a>
                    <a target="_blank" rel="noreferrer" href={member.linkedin}><img src={iconLinkedin} alt="alt-linkedin-icon"/></a>
                  </div>
{/*                   <span>{member.github}</span>
                  <span>{member.linkedin}</span> */}
                </div>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default AboutUs;
