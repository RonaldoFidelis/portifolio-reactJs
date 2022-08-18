import Avatar from "../img/ft_perfil_fundoAzul.jpeg"; 

//Importando estilo
import "../style/components/sidebar.sass";
// import BtnDownload from "./BtnDownload";
import InforContainer from "./InforContainer";

import SocialMidiaNetworks from "./SocialMidiaNetworks";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="ft_perfil" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialMidiaNetworks />
      <InforContainer />
      <div>
        <a href="../src/files/Curiculo - Ronaldo Rafael Fidelis Da Silva.pdf"><button className="btn" download>Download Curriculo</button></a>
      </div>
      {/* <BtnDownload /> */}
    </aside>
  );
};

export default  Sidebar;