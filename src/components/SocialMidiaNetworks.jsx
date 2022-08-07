//Importando o icons do Reacts
import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

import "../style/components/socialmidianetworks.sass";

//Cirando objetos para puxar os icons
const socialNetworks = [
  {
    name: "Linkedin", icon: <FaLinkedinIn />
  },
  {
    name: "Github", icon: <FaGithub />
  },
  {
    name: "Instagram", icon: <FaInstagram /> // Vale a pena?
  },
];

const SocialMidiaNetworks = () => {
    return (
      <section id="social-networks">
        {socialNetworks.map((network) => (
          <a href="#" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
          </a>
        ))}
      </section>
    );
  };
  
  export default SocialMidiaNetworks;