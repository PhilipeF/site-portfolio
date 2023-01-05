import ProjectsContainer from './ProjectsContainer';
import TechnologiesContainer from './TechnologiesContainer';

import '../styles/components/maincontent.sass'

const MainContent = () => {
    return (
        <div id='main-content'>
            <ProjectsContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </div>
    )
}

export default MainContent;