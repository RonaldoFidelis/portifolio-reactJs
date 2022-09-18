import {AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import "../style/components/info.sass";


const InforContainer = () => {
  return (
    <section id="information">
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>Gmail</h3>
                <p>RonaldoFidelis.Ti</p>
            </div>
        </div>

        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(81) 98516-2273</p>
            </div>
        </div>

        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Cidade</h3>
                <p>Recife / PE</p>
            </div>
        </div>
    </section>
  );
};

export default InforContainer;