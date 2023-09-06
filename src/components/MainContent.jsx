import AboutContainer from './AboutContainer';
import TechnologiesContainer from './TechnologiesContainer';
import ProjectsContainer from './ProjectsContainer';

import '../styles/components/maincontent.sass'
import Footer from './Footer';

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