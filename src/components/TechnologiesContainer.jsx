import { DiHtml5, DiCss3, DiJavascript, DiNodejs, DiReact } from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJavascript /> },
    { id: "reactjs", name: "ReactJS", icon: <DiReact /> },
    { id: "nodejs", name: "NodeJS", icon: <DiNodejs /> }
]

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    tech.id == "html" ? <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>Linguagem de Marcação de Hipertexto (HTML)</p>
                        </div>
                    </div> : "" ||
                        tech.id == "css" ? <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>Usamos para estilizar as paginas web</p>
                        </div>
                    </div> : "" ||
                        tech.id == "js" ? <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>Usamos para criar as funcionalidades do sistema</p>
                        </div>
                    </div> : "" ||
                        tech.id == "reactjs" ? <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>Biblioteca JavaScript declarativa, eficiente e flexível</p>
                        </div>
                    </div> : "" ||
                        tech.id == "nodejs" ? <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>O Node.js é um ambiente de execução Javascript server-side.</p>
                        </div>
                    </div> : ""

                ))}

                {/* {technologies.map((tech) => (
                    
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                ))} */}
            </div>
        </section>
    )
}

export default TechnologiesContainer