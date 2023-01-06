import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import '../styles/components/socialnetworking.sass';

const socialNetworking = [
    { name: "linkedin", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/philipe-ferreira7/" },
    { name: "github", icon: <FaGithub />, url: "https://github.com/PhilipeF" },
    { name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/philipe_dev/" }
]

const SoicialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworking.map((network) => (
                <a href={network.url} className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default SoicialNetworks