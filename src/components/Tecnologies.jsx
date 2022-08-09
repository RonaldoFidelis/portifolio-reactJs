//importando icons da biblioteca do react
import {
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiReact,
  DiGit,
  DiJavascript
} from "react-icons/di";

import '../style/components/tecnologies.sass'

//Objetos com o icons
const IconsTecnologies = [
  {id:"js", name:"JavaScript", icon: <DiJavascript/>, discription: ""},
  {id:"react", name:"ReactJS", icon: <DiReact/>, discription: ""},
  {id:"html", name:"Html5", icon: <DiHtml5/>, discription: ""},
  {id:"css", name:"Css3", icon: <DiCss3/>, discription: ""},
  {id:"node", name:"NodeJs", icon: <DiNodejsSmall/>, discription:""},
  {id:"git", name:"Git", icon: <DiGit/>}
];

const Tecnologies = () => {
  return <section className='tecnologies-container'>
          <h2>Tecnologias</h2>
          <div className="tecnologies-grid">
            {IconsTecnologies.map((tech) => (
              <div className="tech-card" id={tech.id} key={tech.id}>
                {tech.icon}
                <div className="tech-info">
                  <h3>{tech.name}</h3>
                </div>
              </div>
            ))}
          </div>
    </section>
};

export default Tecnologies