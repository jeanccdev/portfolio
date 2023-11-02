import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./routes/Home"
import Skills from "./routes/Skills"
import Projects from "./routes/Projects"
import Header from "./components/Header"

import { useEffect, useState } from 'react'


function App() {
    const [link, setLink] = useState('')

    useEffect(() => {
        setLink(location.pathname)
    }, [])

    return (
        <>
            <BrowserRouter>
                <Header link={link} />
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

export default App
