import './styles.scss';
import ReactJs from '../../assets/react.svg';
import JavaScript from '../../assets/javascript.svg';
import Git from '../../assets/git.svg';
import Node from '../../assets/node.svg'
import Csharp from '../../assets/csharp.svg'
import DotNet from '../../assets/net.svg'

function Experience() {
  return (
    <div className="container-experience">
      <h2>Experiências Profissionais</h2>
      <div className='experiences'>
        <div className='experience-content'>
          <div className='experience-header'>
            <h3>Cubos Academy </h3>
            <span>Jan 2023 / Abr 2023</span>
          </div>
          <h5>Desenvolvedor Full Stack</h5>
          <p>Foco no Front-End. Contribuí para o desenvolvimento de uma plataforma voltada a escritórios de advocacia, focada em produtividade, organização e automação de processos, oferecendo funcionalidades como geração e assinatura de documentos, gestão de clientes e processos e organização de agenda.</p>
          <img src={ReactJs} alt="react-js" />
          <img src={JavaScript} alt="javascript" />
          <img src={Git} alt="git" />
          <img src={Node} alt="nodejs" />
        </div>

        <div className='experience-content'>
          <div className='experience-header'>
            <h3>Analysis BI </h3>
            <span>Abr 2023 / Atual</span>
          </div>
          <h5>Desenvolvedor Full Stack</h5>
          <p> Contribuo para a melhoria de dashboards utilizando JavaScript, C#, .NET, SQL Server e DevExpress, incluindo novos recursos personalizados para aprimorar a experiência do usuário. Desenvolvi um aplicativo multiplataforma iOS/Android permitindo aos clientes o acesso às soluções BI de qualquer lugar.</p>
          <img src={DotNet} alt=".NET" />
          <img src={JavaScript} alt="javascript" />
          <img src={Csharp} alt="csharp" />
        </div>
      </div>




    </div>
  )
}

export default Experience
