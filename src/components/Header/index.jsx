import './styles.scss';
import Brazil from '../../assets/brazil.svg';
import USA from '../../assets/usa.svg'
import Spain from '../../assets/spain.svg'
import { useLanguage } from '../../context/LanguageContext';

function Header() {

  const { language, setLanguage } = useLanguage()

  return (
    <div className="container-header">
      <div className='header-right'>
        <ul>
          <li>
            <a href='#experience-section'>{language == "pt" ? "Experiências" :
              language == "en" ? "Experiences" :
                "Experiencias"}</a>
          </li>
          <li>
            <a href='#projects-section'>{language == "pt" ? "Projetos" : language == "en" ? "Projects" : "Proyectos"}</a>
          </li>
        </ul>
        <div className='languages'>
          <img src={Brazil} alt='portuguese' className={language == "pt" ? "active" : ""} onClick={() => setLanguage("pt")} />
          <img src={USA} alt='english' className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} />
          <img src={Spain} alt='spanish' className={language === "es" ? "active" : ""} onClick={() => setLanguage("es")} />
        </div>
      </div>
    </div>
  )
}

export default Header
