import SoicialNetworks from './SocialNetWorking';
import InformationContainer from './InformationContainer';

import file from '../assets/philipesf-curriculo-dev.pdf';
import profile from '../assets/profile.jpeg';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={profile} alt="Philipe Ferreira" />
            <p className="title">Desenvolvedor Web <br /> Front End</p>
            <SoicialNetworks />
            <InformationContainer />
            <a href={file} download className="btn">
                Download Currículo
            </a>
        </aside>
    )
}

export default Sidebar

