import Avatar from "../img/ft_perfil_fundoAzul.jpeg"; 

//Importando estilo
import "../style/components/sidebar.sass";
import InforContainer from "./InforContainer";

import SocialMidiaNetworks from "./SocialMidiaNetworks";


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="ft_perfil" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialMidiaNetworks />
      <InforContainer />
      <a href='src/files/Curriculo.pdf' className="btn" download>
        Download currículo
      </a>
    </aside>
  );
};

export default  Sidebar;