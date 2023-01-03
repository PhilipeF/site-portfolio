import '../styles/components/sidebar.sass';
import profile from '../img/profile.jpeg';
import SoicialNetworking from './SocialNetWorking';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={profile} alt="" />
            <SoicialNetworking/>
            <p className="title">Desenvolvedor</p>
            <p>informações de contato</p>
            <a href="" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}

export default Sidebar

