import SoicialNetworks from './SocialNetWorking';
import InformationContainer from './informationContainer';

import profile from '../img/profile.jpeg';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={profile} alt="Philipe Ferreira" />
            <p className="title">Desenvolvedor Web <br /> Front End</p>
            <SoicialNetworks />
            <InformationContainer />
            {/* <a href='../img/profile.jpeg' download className='btn'> */}
            <a href='../assets/curriculophilipef.pdf' download className="btn">
                Download Currículo
                {/* <img src='../img/profile.jpeg' alt="profile" width="500" height="500" /> */}
            </a>
        </aside>
    )
}

export default Sidebar

