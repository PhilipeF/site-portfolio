import '../styles/components/sidebar.sass';
import profile from '../img/profile.jpeg';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={profile} alt="" />
            <p className='title'>Desenvolvedor</p>
            <p>redes sociais</p>
            <p>informações de contato</p>
            <a href="" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}

export default Sidebar

