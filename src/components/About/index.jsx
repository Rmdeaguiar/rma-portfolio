import './styles.scss';
import Profile from '../../assets/profile.png'
import Linkedin from '../../assets/linkedin.svg'
import GitHub from '../../assets/github.svg'
import { useLanguage } from '../../context/LanguageContext';

function Header() {
  const { language } = useLanguage();

  return (
    <div className="container-about">
      <div className='about-image'>
        <img src={Profile} alt="profile-image" />
      </div>
      <div className='about-content'>
        <div className='content-text'>
          <h1>{language == "pt" ? "Olá, sou o Rafael" : "Hello, I'm Rafael"}👋</h1>
          <p>{ language == "pt" ? 
          "Desenvolvedor desde 2021, focado em criar soluções que proporcionem a melhor experiência para o usuário. Tenho facilidade em me adaptar a novas tecnologias e transformo desafios em oportunidades de aprendizado, sempre aprendendo e evoluindo para resolver problemas que tenham impactos positivos para as pessoas." :
          "Developer since 2021, focused on creating solutions that provide the best user experience. I adapt easily to new technologies and enjoy turning challenges into learning opportunities, constantly evolving to solve problems that have a positive impact on people." }
          </p>
        </div>
        <div className='content-image'>
          <a href='https://www.linkedin.com/in/rafael-maguiar/' target="_blank" rel='noreferrer'><img src={Linkedin} alt='linkedin' /></a>
          <a href='https://www.github.com/rmdeaguiar/' target="_blank" rel='noreferrer'><img src={GitHub} alt='github' /></a>
        </div>
      </div>
    </div>
  )
}

export default Header
