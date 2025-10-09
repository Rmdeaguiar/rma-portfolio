import './styles.scss';
import Brazil from '../../assets/brazil.svg';
import USA from '../../assets/usa.svg'
import { useLanguage } from '../../context/LanguageContext';

function Header() {

  const { language, setLanguage } = useLanguage()

  return (
    <div className="container-header">
      <div className='header-right'>
        <ul>
          <li>
            <a href='#experience-section'>{language == "pt" ? "Experiências" : "Experiences"}</a>
          </li>
          <li>
            <a href='#projects-section'>{language == "pt" ? "Projetos" : "Projects"}</a>
          </li>
        </ul>
        <div className='languages'>
          <img src={Brazil} alt='portuguese' className={language == "pt" ? "active" : ""} onClick={() => setLanguage("pt")} />
          <img src={USA} alt='english' className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} />
        </div>
      </div>
    </div>
  )
}

export default Header
