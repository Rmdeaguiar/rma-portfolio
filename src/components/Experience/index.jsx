import './styles.scss';
import ReactJs from '../../assets/react.svg';
import JavaScript from '../../assets/javascript.svg';
import Git from '../../assets/git.svg';
import Node from '../../assets/node.svg'
import Csharp from '../../assets/csharp.svg'
import DotNet from '../../assets/net.svg'

import Analysis from '../../assets/analysis.png';
import Cubos from '../../assets/cubos.png'

import { useLanguage } from '../../context/LanguageContext';


function Experience() {
  const { language } = useLanguage();

  return (
    <div id="experience-section" className="container-experience">
      <h2>{language == "pt" ? "Experiência Profissional" : language == "en" ? "Professional Experience" : "Experiencia Profesional"}</h2>
      <div className='experiences'>
        <div className='experience-content'>
          <div className='experience-header'>
            <h3><img src={Cubos} alt="cubos" />Cubos Academy </h3>
            <span>Jan 2023 / {language == "pt" ? "Abr" : "Apr"} 2023</span>
          </div>
          <h5>{language == "pt" ? "Desenvolvedor Front-End" : language == "en" ? "Front-End Developer" : "Desarrollador Front-End"}</h5>
          <p>{language == "pt" ? "Foco no Front-End. Contribuí para o desenvolvimento de uma plataforma voltada a escritórios de advocacia, focada em produtividade, organização e automação de processos, oferecendo funcionalidades como geração e assinatura de documentos, gestão de clientes e processos e organização de agenda." : language == "en" ?
            "Focused on Front-End development. I contributed to the creation of a platform designed for law firms, aimed at improving productivity, organization, and process automation, offering features such as document generation and signing, client and case management, and schedule organization." :
            "Enfoque en el desarrollo front-end. Contribuí al desarrollo de una plataforma dirigida a bufetes de abogados, centrada en la productividad, la organización y la automatización de procesos, que ofrece funcionalidades como la generación y firma de documentos, la gestión de clientes y casos, y la organización del calendario."}
          </p>
          <img src={ReactJs} alt="react-js" />
          <img src={JavaScript} alt="javascript" />
          <img src={Node} alt="nodejs" />
          <img src={Git} alt="git" />
        </div>

        <div className='experience-content'>
          <div className='experience-header'>
            <h3><img src={Analysis} alt="analysis" />Analysis BI </h3>
            <span>{language == "pt" ? "Mai 2023 / Atual" : "May 2023 / Present"} </span>
          </div>
          <h5>{language == "pt" ? "Desenvolvedor Full Stack (Foco Front)" : language == "en" ? "Full Stack Developer" : "Desarrollador Full Stack"}</h5>
          <p> {language == "pt" ? "Atuo na evolução de dashboards em uma aplicação web utilizando JavaScript, C#, .NET e SQL, construindo e aprimorando recursos personalizados como foco na experiência do usuário. Desenvolvi um aplicativo multiplataforma iOS/Android permitindo aos clientes o acesso às soluções BI de qualquer lugar." : language == "en" ?
            "I contribute to enhancing dashboards using JavaScript, C# and .NET including new custom features to improve user experience. I also developed a cross-platform iOS/Android application that allows clients to access BI solutions from anywhere." :
            "Contribuyo a la mejora de paneles de control utilizando JavaScript, C# y .NET, incluyendo nuevas funcionalidades personalizadas para optimizar la experiencia del usuario. También desarrollé una aplicación multiplataforma para iOS y Android que permite a los clientes acceder a soluciones empresariales de qualquier sitio"}
          </p>
          <img src={DotNet} alt=".NET" />
          <img src={JavaScript} alt="javascript" />
          <img src={Csharp} alt="csharp" />
          <img src={Git} alt="git" />
        </div>
      </div>




    </div>
  )
}

export default Experience
