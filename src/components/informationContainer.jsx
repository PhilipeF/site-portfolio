import '../styles/components/informationcontainer.sass'
import { AiFillPhone, AiFillEnvironment, AiOutlineMail } from 'react-icons/ai';

const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(24) 999917-3920</p>
                </div>
            </div>

            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <p>philipesferreiraa@gmail.com</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Volta Redonda-RJ</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer;