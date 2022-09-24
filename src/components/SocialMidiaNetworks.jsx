//Importando o icons do Reacts
import {FaLinkedinIn, FaGithub, FaWhatsapp} from "react-icons/fa";

import "../style/components/socialmidianetworks.sass";

//Cirando objetos para puxar os icons
const socialNetworks = [
  {
    name: "Linkedin", icon: <FaLinkedinIn />, a: "https://www.linkedin.com/in/ronaldo-fidelis-9922941a9/"
  },
  {
    name: "Github", icon: <FaGithub />, a: "https://github.com/RonaldoFidelis"
  },
  {
    name: "WhatsApp", icon: <FaWhatsapp />, a: "https://api.whatsapp.com/send/?phone=5581985162273&text&type=phone_number&app_absent=0"// Vale a pena?
  },
];

const SocialMidiaNetworks = () => {
    return (
      <section id="social-networks">
        {socialNetworks.map((network) => (
          <a href={network.a} className="social-btn" id={network.name} key={network.name} target="_blank">
            {network.icon}
          </a>
        ))}
      </section>
    );
  };
  
  export default SocialMidiaNetworks;