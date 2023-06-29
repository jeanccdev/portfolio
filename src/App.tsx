import './App.scss'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { useState, useEffect } from 'react'
import Home from "./routes/Home"
import Skills from "./routes/Skills"
import Projects from "./routes/Projects"

import { BiLogoGithub } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoWhatsapp } from 'react-icons/bi';


function App() {
    const [menu, setMenu] = useState(false)
    useEffect(() => {
        if (menu === true) {
            const containerMenu = document.querySelector('.container-menu') as HTMLElement;
            containerMenu.style.display = "flex";
        }
        else {
            const containerMenu = document.querySelector('.container-menu') as HTMLElement;
            containerMenu.style.display = "none";
        }
    }, [menu])

    return (
        <>
            <BrowserRouter>
                <div className="container-menu">
                    <a href="/">Início</a>
                    <a href="/skills">Habilidades</a>
                    <a href="/projects">Projetos</a>
                </div>
                <header>
                    <a href="/"><h2>&lt;JeanCarlos&gt;</h2></a>
                    <div id="redesSociais">
                        <a href="https://github.com/omniavincit98" target="_blank">
                            <BiLogoGithub className="BiLogo"/>
                        </a>
                        <a href="https://www.linkedin.com/in/jean-carlos-cristovao/" target="_blank">
                            <BiLogoLinkedin className="BiLogo"/>
                        </a>
                        <a href="https://wa.me/5548998465757" target="_blank">
                            <BiLogoWhatsapp className="BiLogo"/>
                        </a>
                    </div>
                    <nav className='desktopMenu'>
                        <div className="btnMenu" onClick={() => setMenu(!menu)}></div>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    )
}

export default App;
