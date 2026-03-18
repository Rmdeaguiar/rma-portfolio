import './styles.scss';
import ProjectDLM from '../../assets/project-dlm.png'
import ProjectAdv from '../../assets/project-adv.png'
import ProjectCubos from '../../assets/project-cubos.png'

import ReactJs from '../../assets/react.svg';
import JavaScript from '../../assets/javascript.svg';
import Git from '../../assets/git.svg';
import Node from '../../assets/node.svg'
import Css from '../../assets/css.svg'
import Postgres from '../../assets/postgresql.svg'
import Scss from '../../assets/scss.svg'

import { useLanguage } from '../../context/LanguageContext';

function Projects() {
    const { language } = useLanguage();

    const projects = [
        {
            title: "Dra. Lais Muhana",
            description: `${language == "pt" ? "Desenvolvimento de um site responsivo, com integração de domínio próprio, destacando informações sobre a profissional com uma navegação clara e design otimizado para diferentes dispositivos." : language == "en" ?
                "Development of a responsive website with custom domain integration, highlighting information about the professional through clear navigation and an optimized design for different devices." :
                "Desarrollo de un sitio web responsivo, con integración de dominio personalizado, que destaca la información sobre el profesional con una navegación clara y un diseño optimizado para diferentes dispositivos."}
                `,
            link: "https://laismuhana.com.br/",
            image: ProjectDLM,
            techs: [ReactJs, JavaScript, Scss, Git],
        },
        {
            title: "+ADV",
            description: `${language == "pt" ? "Contribuí para o desenvolvimento de uma plataforma voltada a advocacia, focada em produtividade, organização e automação de processos, oferecendo maior praticidade aos clientes." : language == "en" ?
                "Contributed to the development of a platform for the legal sector, focused on productivity, organization, and process automation, providing greater convenience for clients." :
                "Contribuí al desarrollo de una plataforma orientada a la profesión jurídica, centrada en la productividad, la organización y la automatización de procesos, ofreciendo una mayor comodidad a los clientes."}`,
            link: "https://app.maisadv.com/",
            image: ProjectAdv,
            techs: [ReactJs, JavaScript, Scss, Node, Git],
        },
        {
            title: "Payment Management",
            description: `${language == "pt" ? "Projeto de conclusão do curso Desenvolvimento de Software (Cubos Academy). Desenvolvido junto à uma equipe, trata-se uma aplicação para cadastrar e editar clientes com suas respectivas cobranças. Além disso, funcionalidades como resumo de cobranças, pesquisa, ordenação e detalhamento de clientes." : language == "en" ?
                "Final project of the Software Development course (Cubos Academy). Developed as part of a team, it is an application for registering and editing clients and their respective charges. It also includes features such as charge summaries, search, sorting, and detailed client views." :
                "Proyecto final del curso de Desarrollo de Software (Cubos Academy). Desarrollada en equipo, es una aplicación para registrar y editar clientes con sus respectivas facturas. Además, incluye funcionalidades como resúmenes de facturas, búsqueda, ordenación y detalles del cliente."
                }`,
            link: "https://payment-management.netlify.app/",
            image: ProjectCubos,
            techs: [ReactJs, Css, JavaScript, Node, Postgres, Git],
        }
    ];


    return (
        <div id="projects-section" className="container-projects">
            <h2>{language == "pt" ? "Projetos" : "Projects"}</h2>

            <div className="projects">
                {projects.map((p, index) => (
                    <div
                        key={index}
                        className="project"
                        style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                        onClick={() => window.open(p.link, '_blank', 'noreferrer')}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `
                                    linear-gradient(to right, rgba(255, 255, 255, 1), transparent),
                                    url(${p.image})
                                `,
                                backgroundPosition: 'right center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                opacity: 0.25,
                                zIndex: 0,
                            }}
                        ></div>

                        <div className='project-content' style={{ position: 'relative', zIndex: 1 }}>
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <div className='project-tec'>
                                {p.techs.map((icon, i) => (
                                    <img key={i} src={icon} alt="tech" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Projects
