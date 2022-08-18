import Avatar from "../img/ft_perfil_fundoAzul.jpeg"; 

//Importando estilo
import "../style/components/sidebar.sass";
import BtnDownload from "./BtnDownload";
import InforContainer from "./InforContainer";

import SocialMidiaNetworks from "./SocialMidiaNetworks";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="ft_perfil" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialMidiaNetworks />
      <InforContainer />
      <BtnDownload />
    </aside>
  );
};

export default  Sidebar;