/* eslint-disable @next/next/no-img-element */
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
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        mostrarMensajeToast("Correo enviado exitosamente");
      } else {
        mostrarMensajeToast("Error al enviar el correo");
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

  const handleP1 = () => {
    window.open(
      "https://github.com/AndresTGonzalez/sistema-documental-fisei-frontend.git",
      "_blank"
    );
  };

  const handleP2 = () => {
    window.open(
      "https://github.com/jojeda517/Seguridad-Frontend.git",

      "_blank"
    );
  };
  const handleP3 = () => {
    window.open(
      "https://github.com/MancomunidadPermisos/Permisos-FrontEnd.git",
      "_blank"
    );
  };

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1pZUvPJw51DKEhXpGJ3yy_yStwvAgV6mL/view?usp=sharing",
      "_blank"
    );
  };

  const [mostrarToast, setMostrarToast] = useState(false);
  const [mensajeToast, setMensajeToast] = useState("");

  const mostrarMensajeToast = (mensaje: string) => {
    setMensajeToast(mensaje);
    setMostrarToast(true);

    // Ocultar el toast después de cierto tiempo (por ejemplo, 5 segundos)
    setTimeout(() => {
      setMostrarToast(false);
    }, 5000);
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
                <Link href="#portfolio">PORTAFOLIO</Link>
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
            <a href="https://github.com/DennisBonilla927">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/dennis-bonilla-granja-15295230a/">
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
                  <strong>Website</strong> portafolio-coral-one.vercel.app
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
    <h2>Portafolio</h2>
    <div className="grid-container">
      <div className="card">
        <a href="#">
          <img className="rounded-t-lg" src="Gestion Domcumental.jpeg" alt="Portfolio item" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5>Sistema Documental FISEI</h5>
          </a>
          <p>Sistema Documental FISEI de la Facultad de Ingeniería en Sistemas, Electrónica e Industrial</p>
          <div className="botonEspecial">
            <button onClick={handleP1}>
              Revisar <FontAwesomeIcon icon={faArrowRight} />
              <span className="overlay"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <a href="#">
          <img className="rounded-t-lg" src="Gestion de archivos.png" alt="Portfolio item" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5>Gestión de archivos</h5>
          </a>
          <p>Sistema de gestion de archivos para la Universidad Técnica de Ambato UTA.</p>
          <div className="botonEspecial">
            <button onClick={handleP2}>
              Revisar <FontAwesomeIcon icon={faArrowRight} />
              <span className="overlay"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <a href="#">
          <img className="rounded-t-lg" src="Sistema Permisos.png" alt="Portfolio item" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5>Sistema de permisos</h5>
          </a>
          <p>Sistema de permisos y vacaciones para la mancomunidad de transito de tungurahua.</p>
          <div className="botonEspecial">
            <button onClick={handleP3}>
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
                cols={30}
                rows={10}
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
          <a href="https://github.com/DennisBonilla927">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/dennis-bonilla-granja-15295230a/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </footer>

      {mostrarToast && (
        <div
          id="toast-default"
          className="mt-16 fixed top-8 right-8 z-50 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
            <span className="sr-only">Warning icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">{mensajeToast}.</div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-default"
            aria-label="Close"
            onClick={() => setMostrarToast(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
