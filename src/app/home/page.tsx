"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faDownload,
  faGamepad,
  faHeadphones,
  faPlane,
  faArrowRight,
  faPersonHiking,
  faBook,
  faCar,
  faCamera,
  faPaperPlane,
  faAnglesUp,
  faLocationDot,
  faMobileScreen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faTwitter,
  faSkype,
  faLinkedinIn,
  faApple,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import "./estilo.css";

export default function Inicio() {
  useEffect(() => {
    const seleccionar = () => {
      // Implementación de la función seleccionar
    };

    const mostrarOcultarMenu = () => {
      // Implementación de la función mostrarOcultarMenu
    };

    /* document.querySelectorAll('a').forEach(el => el.addEventListener('click', seleccionar));
    document.querySelector('.nav-responsive').addEventListener('click', mostrarOcultarMenu);

    return () => {
      document.querySelectorAll('a').forEach(el => el.removeEventListener('click', seleccionar));
      document.querySelector('.nav-responsive').removeEventListener('click', mostrarOcultarMenu);
    }; */
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      
      if (response.ok) {
        alert("Mensaje enviado correctamente!");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert("Error enviando el mensaje.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const skills = document.getElementById("skills");
      if (skills) {
        const distanciaSkills =
          window.innerHeight - skills.getBoundingClientRect().top;
        if (distanciaSkills >= 300) {
          let habilidades = document.getElementsByClassName("progreso");
          habilidades[0].classList.add("javascript");
          habilidades[1].classList.add("htmlcss");
          habilidades[2].classList.add("photoshop");
          habilidades[3].classList.add("wordpress");
          habilidades[4].classList.add("drupal");
          habilidades[5].classList.add("comunicacion");
          habilidades[6].classList.add("trabajo");
          habilidades[7].classList.add("creatividad");
          habilidades[8].classList.add("dedicacion");
          habilidades[9].classList.add("proyect");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1pZUvPJw51DKEhXpGJ3yy_yStwvAgV6mL/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <div className="contenedor-header">
        <header>
          <div className="logo">
            <a href="#">Dennis</a>
          </div>
          <nav id="nav">
            <ul>
              <li>
                <Link href="#inicio">INICIO</Link>
              </li>
              <li>
                <Link href="#sobremi">SOBRE MI</Link>
              </li>
              <li>
                <Link href="#skills">SKILLS</Link>
              </li>
              <li>
                <Link href="#curriculum">CURRICULUM</Link>
              </li>
              <li>
                <Link href="#portfolio">PORTFOLIO</Link>
              </li>
              <li>
                <Link href="#contacto">CONTACTO</Link>
              </li>
            </ul>
          </nav>
          <div className="nav-responsive">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </header>
      </div>

      <section id="inicio" className="inicio">
        <div className="contenido-banner">
          <div className="contenedor-img">
            <img src="Perfil3.png" alt="Nick Perez" />
          </div>
          <h1>Dennis Bonilla</h1>
          <h2>Ingeniero de Software - Experto UI/UX</h2>
          <div className="redes">
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </section>

      <section id="sobremi" className="sobremi">
        <div className="contenido-seccion">
          <h2>Sobre mi</h2>
          <p>
            <span>Hola, soy Dennis Bonilla. </span>
            Soy ingeniero de software y desarrollador full stack apasionado por
            la tecnología, especializado en soluciones web y móviles. Creo
            interfaces intuitivas y gestiono back-ends robustos, siempre
            enfocado en resultados eficientes. Comprometido con el aprendizaje
            continuo, me mantengo actualizado con las últimas tendencias del
            sector. Disfruto colaborando en equipos multidisciplinarios para
            superar expectativas y resolver problemas de manera creativa.
          </p>
          <div className="fila">
            <div className="col">
              <h3>Datos Personales</h3>
              <ul>
                <li>
                  <strong>Cumpleaños</strong> 06-04-2001
                </li>
                <li>
                  <strong>LInkedin</strong> Dennis Bonilla Granja
                </li>
                <li>
                  <strong>Website</strong> www.example.com
                </li>
                <li>
                  <strong>Dirección</strong> Baños, Ecuador
                </li>
                <li>
                  <strong>Cargo</strong> <span>FREELANCE</span>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Intereses</h3>
              <div className="contenedor-intereses">
                <div className="interes">
                  <FontAwesomeIcon icon={faGamepad} />
                  <span>JUEGOS</span>
                </div>
                <div className="interes">
                  <FontAwesomeIcon icon={faHeadphones} />
                  <span>MUSICA</span>
                </div>
                <div className="interes">
                  <FontAwesomeIcon icon={faPlane} />
                  <span>VIAJAR</span>
                </div>
                <div className="interes">
                  <FontAwesomeIcon icon={faAndroid} />
                  <span>ANDROID</span>
                </div>
                <div className="interes">
                  <FontAwesomeIcon icon={faPersonHiking} />
                  <span>DEPORTE</span>
                </div>
                <div className="interes">
                  <FontAwesomeIcon icon={faBook} />
                  <span>LIBROS</span>
                </div>
                <div className="interes">
                  <FontAwesomeIcon icon={faCar} />
                  <span>AUTOS</span>
                </div>
                <div className="interes">
                  <FontAwesomeIcon icon={faCamera} />
                  <span>FOTOS</span>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleDownload}>
            Descargar CV <FontAwesomeIcon icon={faDownload} />
            <span className="overlay"></span>
          </button>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="contenido-seccion">
          <h2>Skills</h2>
          <div className="fila">
            <div className="col">
              <h3>Technical Skills</h3>
              <div className="skill">
                <span>Javascript</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>75%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>HTML & CSS</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>89%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>TypeScript</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>80%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>React</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>81%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Angular</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>55%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h3>Professional Skills</h3>
              <div className="skill">
                <span>Comunicación</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>80%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Trabajo en Equipo</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>70%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Creatividad</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>99%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Dedicación</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>65%</span>
                  </div>
                </div>
              </div>
              <div className="skill">
                <span>Proyect Management</span>
                <div className="barra-skill">
                  <div className="progreso">
                    <span>94%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="curriculum">
        <div className="contenido-seccion">
          <h2>Curriculum</h2>
          <div className="fila">
            <div className="col izquierda">
              <h3>Educación</h3>
              <div className="item izq">
                <h4>Ingenieria de Software</h4>
                <span className="casa">Universidad Técnica de Ambato</span>
                <span className="fecha">2019 - 2025</span>
                <p>
                  Me gradué de Ingeniero de software en esta universidad
                  principalmente con conocimiento en desarrollo web
                </p>
                <div className="conectori">
                  <div className="circuloi"></div>
                </div>
              </div>
            </div>
            <div className="col derecha">
              <h3>Experiencia</h3>
              <div className="item der">
                <h4>Practicas laborales </h4>
                <span className="casa">
                  Mancomunidad de tránsito de Tungurahua
                </span>
                <span className="fecha">Enero 2024 - Abril 2024</span>
                <p>
                  Desarrolle una aplicacion web y movil de permisos y vacaciones
                  donde trabaje en el frontend y backend
                </p>
                <div className="conectord">
                  <div className="circulod"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="contenido-seccion">
          <h2>Portfolio</h2>
          <div className="fila grid ml-32">
            <div
              className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow"
              style={{ backgroundColor: "#1e2326", borderColor: "#1e2326" }}
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="p2.jpg"
                  alt="Portfolio item"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <div className="botonEspecial">
                  <button>
                    Revisar <FontAwesomeIcon icon={faArrowRight} />
                    <span className="overlay"></span>
                  </button>
                </div>
              </div>
            </div>
            {/* Repite el bloque anterior para los otros tres elementos */}
            <div
              className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow"
              style={{ backgroundColor: "#1e2326", borderColor: "#1e2326" }}
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="p2.jpg"
                  alt="Portfolio item"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <div className="botonEspecial">
                  <button>
                    Revisar <FontAwesomeIcon icon={faArrowRight} />
                    <span className="overlay"></span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow"
              style={{ backgroundColor: "#1e2326", borderColor: "#1e2326" }}
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="p2.jpg"
                  alt="Portfolio item"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <div className="botonEspecial">
                  <button>
                    Revisar <FontAwesomeIcon icon={faArrowRight} />
                    <span className="overlay"></span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow"
              style={{ backgroundColor: "#1e2326", borderColor: "#1e2326" }}
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="p2.jpg"
                  alt="Portfolio item"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <div className="botonEspecial">
                  <button>
                    Revisar <FontAwesomeIcon icon={faArrowRight} />
                    <span className="overlay"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="contacto">
        <div className="contenido-seccion">
          <h2>CONTACTO</h2>
          <div className="fila">
            {/* Formulario */}
            <form onSubmit={handleSubmit} className="col">
                <input
                  type="text"
                  name="name"
                  placeholder="Tú Nombre"
                  onChange={handleChange}
                  value={formData.name}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Número telefónico"
                  onChange={handleChange}
                  value={formData.phone}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Dirección de correo"
                  onChange={handleChange}
                  value={formData.email}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Tema"
                  onChange={handleChange}
                  value={formData.subject}
                />
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
                <button type="submit">
                  Enviar Mensaje <FontAwesomeIcon icon={faPaperPlane} />
                  <span className="overlay"></span>
                </button>
              </form>
            {/* Mapa */}
          </div>
        </div>
      </section>

      <footer>
        <a href="#inicio" className="arriba">
          <FontAwesomeIcon icon={faAnglesUp} />
        </a>
        <div className="redes">
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </footer>
    </>
  );
}
