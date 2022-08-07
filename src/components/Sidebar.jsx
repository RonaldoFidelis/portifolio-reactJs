import Avatar from "../img/ft_perfil_fundoAzul.jpeg"; 

//Importando estilo
import "../style/components/sidebar.sass";
import SocialMidiaNetworks from "./SocialMidiaNetworks";

const Sidebar = () => {
  return (<aside id="sidebar">
    <img src={Avatar} alt="ft_perfil" />
    <p className="title">Desenvolvedor Front-End</p>
    <SocialMidiaNetworks />
    <p>informações de contato</p>
    <a href="../src/files/Curiculo - Ronaldo Rafael Fidelis Da Silva.pdf" className="btn" download>
      Download currículo
    </a>
  </aside>
  );
};

export default  Sidebar;