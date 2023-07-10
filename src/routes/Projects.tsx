import jaquelinePreview from '../../public/jaquelinePreview2.png'
import shayanePreview from '../../public/shayanepreview.png'

const Projects = () => {
    return (
        <>
            <section id="projects">
                <h2>Projetos</h2>
                <div>
                    <div>
                        <a href="https://jaquelinecristovao.com/" target="_blank" rel="noopener noreferrer"><img src={jaquelinePreview} alt="Jaqueline Cristóvão" /></a>
                        <p>PHP e MySQL</p>
                    </div>
                    <div>
                        <a href="https://shayanezonta.000webhostapp.com/" target="_blank" rel="noopener noreferrer"><img src={shayanePreview} alt="Shayane Zonta Beauty" /></a>
                        <p>PHP e MySQL</p>
                    </div>
                    <div>
                        <h3>Em desenvolvimento</h3>
                        <p>React, Node e MySQL</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects