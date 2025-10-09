import Header from "../../components/Header"
import About from "../../components/About";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import { LanguageProvider } from "../../context/LanguageContext";

function Home() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <About />
        <Experience />
        <Projects />
      </LanguageProvider>
    </>
  )
}

export default Home
