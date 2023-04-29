import { DiHtml5, DiCss3, DiJavascript, DiNodejs, DiReact } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {
        id: "html",
        name: "HTML5",
        icon: <DiHtml5 />,
        description: "Linguagem de Marcação de Hipertexto (HTML). Utilizada para fazer a estrutura base das paginas web."
    },
    {
        id: "css",
        name: "CSS3",
        icon: <DiCss3 />,
        description: "Usamos para estilizar elementos de uma pagina como cor do texto, fonte e espaçamento entre blocos."
    },
    {
        id: "js",
        name: "Javascript",
        icon: <DiJavascript />,
        description: "Linguagem de programação que permite a você implementar itens complexos em páginas web."
    },
    {
        id: "reactjs",
        name: "React",
        icon: <DiReact />,
        description: "É biblioteca mais popular do JavaScript usada para construir interface de usuário (IU)."
    },
    {
        id: "nodejs",
        name: "Node.js",
        icon: <DiNodejs />,
        description: "É um ambiente de execução Javascript server-side."
    },
    {
        id: "typeScript",
        name: "TypeScript",
        icon: <SiTypescript />,
        description: "É um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript."
    }
]

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer