import { DiHtml5, DiCss3, DiJavascript, DiNodejs, DiReact, DiWordpress } from 'react-icons/di';
import { SiTypescript, SiVtex } from 'react-icons/si';

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
        name: "React.js",
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
    },
    {
        id: "vtexio",
        name: "VTEX IO",
        icon: <SiVtex />,
        description: "É uma plataforma em sistema low-code, voltado para o desenvolvimento de aplicativos para a versão web."
    },
    {
        id: "wordPress",
        name: "WordPress",
        icon: <DiWordpress />,
        description: "É um CMS que nada mais é do que uma plataforma para publicação e gerenciamento de blogs e sites, utilizando PHP e bancos de dados MySQL."
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
                            <p className='tech'>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer