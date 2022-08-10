import "../style/components/cardproject.sass"

//Segui a mesma logica dos icones de tecnologia
/**
 * Pra adicionar um projeto, é só adicionar mais um objeto.
 */
const CardProject = [
  {id:'pokedex',title:'Pokedex', imgUrl:'../src/img/ft_perfil_fundoAzul.jpeg', url:''},
  {id:'pokedex',title:'Em breve...', imgUrl:'', url:''},
  {id:'pokedex',title:'Em breve...', imgUrl:'', url:''},
];

const ProjectsContainer = () => {
  return <section>
    <h2>Projetos</h2>
    <div className="card-grid">
      {CardProject.map((card)=>(
        <div className="card-container" id={card.id} key={card.id}>
          <div className='image-container'>
            <img src={card.imgUrl} alt='' />
          </div>
          <div className="card-content">
            <div className="card-title">
              <h3>{card.title}</h3>
            </div>
          </div>
          <div className="card-btn">
            <button>
              <a href={card.url}>
                Ver projeto
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>  
</section>
}

export default ProjectsContainer