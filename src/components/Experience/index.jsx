import './styles.scss';
import ReactJs from '../../assets/react.svg';
import JavaScript from '../../assets/javascript.svg';
import Git from '../../assets/git.svg';
import Node from '../../assets/node.svg'
import Csharp from '../../assets/csharp.svg'
import DotNet from '../../assets/net.svg'
import { useLanguage } from '../../context/LanguageContext';


function Experience() {
  const { language } = useLanguage();

  return (
    <div id="experience-section" className="container-experience">
      <h2>{language == "pt" ? "Experiências Profissionais" : "Professional Experience"}</h2>
      <div className='experiences'>
        <div className='experience-content'>
          <div className='experience-header'>
            <h3>Cubos Academy </h3>
            <span>Jan 2023 / {language == "pt" ? "Abr" : "Apr"} 2023</span>
          </div>
          <h5>{language == "pt" ? "Desenvolvedor Full Stack" : "Full Stack Developer"}</h5>
          <p>{language == "pt" ? "Foco no Front-End. Contribuí para o desenvolvimento de uma plataforma voltada a escritórios de advocacia, focada em produtividade, organização e automação de processos, oferecendo funcionalidades como geração e assinatura de documentos, gestão de clientes e processos e organização de agenda." :
            "Focused on Front-End development. I contributed to the creation of a platform designed for law firms, aimed at improving productivity, organization, and process automation, offering features such as document generation and signing, client and case management, and schedule organization."}
          </p>
          <img src={ReactJs} alt="react-js" />
          <img src={JavaScript} alt="javascript" />
          <img src={Node} alt="nodejs" />
          <img src={Git} alt="git" />
        </div>

        <div className='experience-content'>
          <div className='experience-header'>
            <h3>Analysis BI </h3>
            <span>{language == "pt" ? "Abr 2023 / Atual" : "Apr 2023 / Present"} </span>
          </div>
          <h5>{language == "pt" ? "Desenvolvedor Full Stack" : "Full Stack Developer"}</h5>
          <p> {language == "pt" ? "Contribuo para a melhoria de dashboards utilizando JavaScript, C#, .NET, SQL Server e DevExpress, incluindo novos recursos personalizados para aprimorar a experiência do usuário. Desenvolvi um aplicativo multiplataforma iOS/Android permitindo aos clientes o acesso às soluções BI de qualquer lugar." :
            "I contribute to enhancing dashboards using JavaScript, C#, .NET, SQL Server, and DevExpress, including new custom features to improve user experience. I also developed a cross-platform iOS/Android application that allows clients to access BI solutions from anywhere."}
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
