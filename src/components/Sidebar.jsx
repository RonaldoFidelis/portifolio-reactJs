import Avatar from "../img/ft_perfil_fundoAzul.jpeg"; 

//Importando estilo
import "../style/components/sidebar.sass";
// import BtnDownload from "./BtnDownload";
import InforContainer from "./InforContainer";

import SocialMidiaNetworks from "./SocialMidiaNetworks";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <section id="Avatar-Img">
        <img src={Avatar} alt="ft_perfil" />
      </section>
      <p className="title">Desenvolvedor Front-End</p>
      <SocialMidiaNetworks />
      <InforContainer />
      <a href="../src/files/Curiculo - Ronaldo Rafael Fidelis Da Silva.pdf" className="btn" download='Curriculo'>
        Download Curriculo
      </a>
      {/* <BtnDownload /> */}
    </aside>
  );
};

export default  Sidebar;