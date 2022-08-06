import Avatar from "../img/ft_perfil_fundoAzul.jpeg"; 

//Importando estilo
import "../style/components/sidebar.sass";

const Sidebar = () => {
  return (<aside id="sidebar">
    <img src={Avatar} alt="ft_perfil" />
    <p className="title">Desenvolvedor Front-End</p>
    <p>redes socias</p>
    <p>informações de contato</p>
    <a href="" className="btn">
      Download arquivo
    </a>
  </aside>
  );
};

export default  Sidebar;