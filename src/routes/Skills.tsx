import { useEffect } from 'react'

const Skills = () =>{
    useEffect(() => {
        
    }, [])
    return (
        <section id="skills">
            <h2>Habilidades</h2>
            <div>
                <div>
                    <i className="devicon-html5-plain"></i>
                    <p>HTML5</p>
                </div>
                <div>
                    <i className="devicon-css3-plain"></i>
                    <p>CSS3</p>
                </div>
                <div>
                    <i className="devicon-sass-plain"></i>
                    <p>SASS</p>
                </div>
                <div>
                    <i className="devicon-javascript-plain"></i>
                    <p>JavaScript</p>
                </div>
                <div>
                    <i className="devicon-react-plain"></i>
                    <p>React</p>
                </div>
                <div>
                    <i className="devicon-nodejs-plain"></i>
                    <p>Node.JS</p>
                </div>
                <div>
                    <i className="devicon-php-plain"></i>
                    <p>PHP</p>
                </div>
                <div>
                    <i className="devicon-java-plain"></i>
                    <p>Java</p>
                </div>
                <div>
                    <i className="devicon-mysql-plain"></i>
                    <p>MySQL</p>
                </div>
                <div>
                    <i className="devicon-mongodb-plain"></i>
                    <p>MongoDB</p>
                </div>
                <div>
                    <i className="devicon-git-plain"></i>
                    <p>Git</p>
                </div>
            </div>
            
        </section>
    )
}

export default Skills