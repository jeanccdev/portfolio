import { useLocation } from "react-router-dom"
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi"


const Header = (props: { link: string }) => {
    const location = useLocation()
    return (
        <header>
            <a href="/"><h2>&lt;JeanCarlos&gt;</h2></a>
            <div id="redesSociais">
                <a href="https://github.com/omniavincit98" target="_blank">
                    <BiLogoGithub className="BiLogo" />
                </a>
                <a href="https://www.linkedin.com/in/jean-carlos-cristovao/" target="_blank">
                    <BiLogoLinkedin className="BiLogo" />
                </a>
            </div>
            <nav className='desktopMenu'>
                <a href="/" className={props.link == '/' ? 'linkSelecionado' : ''}>Início</a>
                <a href="/skills" className={props.link == '/skills' ? 'linkSelecionado' : ''}>Habilidades</a>
                <a href="/projects" className={props.link == '/projects' ? 'linkSelecionado' : ''}>Projetos</a>
            </nav>
        </header>
    ) 
}

export default Header