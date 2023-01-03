import SoicialNetworks from './SocialNetWorking';

import profile from '../img/profile.jpeg';
import '../styles/components/sidebar.sass';
import InformationContainer from './informationContainer';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={profile} alt="Philipe Ferreira" />
            <p className="title">Desenvolvedor</p>
            <SoicialNetworks />
            <InformationContainer />
            <a href="" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}

export default Sidebar

