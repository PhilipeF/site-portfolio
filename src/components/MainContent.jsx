import AboutContainer from './AboutContainer';
import TechnologiesContainer from './TechnologiesContainer';
import ProjectsContainer from './ProjectsContainer';

import '../styles/components/maincontent.sass'

const MainContent = () => {
    return (
        <div id='main-content'>
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </div>
    )
}

export default MainContent;