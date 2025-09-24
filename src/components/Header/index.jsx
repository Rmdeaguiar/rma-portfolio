import './styles.scss';
import Brazil from '../../assets/brazil.svg';
import USA from '../../assets/usa.svg'

function Header() {

  let language = "pt";

  return (
    <div className="container-header">
      <h1>Rafael Aguiar</h1>

      <div className='header-right'>
        <ul>
          <li>
            <a href='#about-section'>Sobre</a>
          </li>
          <li>
            <a href='#experience-section'>Experiências</a>
          </li>
          <li>
            <a href='#projects-section'>Projetos</a>
          </li>
        </ul>
        <div className='languages'>
          <img src={Brazil} alt='portuguese' className={language == "pt" ? "active" : ""} />
          <img src={USA} alt='english' className={language === "en" ? "active" : ""}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
