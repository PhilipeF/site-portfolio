import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import '../styles/components/socialnetworking.sass';

const socialNetworking = [
    { name: "linkedin", icon: <FaLinkedin /> },
    { name: "github", icon: <FaGithub /> },
    { name: "instagram", icon: <FaInstagram /> }
]

const SoicialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworking.map((network) => (
                <a href="#" className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default SoicialNetworks