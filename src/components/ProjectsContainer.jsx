import "../style/components/cardproject.sass"

//Segui a mesma logica dos icones de tecnologia
/**
 * Pra adicionar um projeto, é só adicionar mais um objeto.
 */
const CardProject = [
  {id:'pokedex',title:'Pokedex', imgUrl:'https://i.pinimg.com/originals/cd/f8/14/cdf814735cd82044e8fb47fd44578200.png', url:'https://github.com/RonaldoFidelis/Pokedex-Project'},
  {id:'pokedex',title:'Em breve...', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/640px-Black_flag.svg.png', url:''},
  {id:'pokedex',title:'Em breve...', imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/640px-Black_flag.svg.png', url:''},
];

const ProjectsContainer = () => {
  return <section>
    <h2>Projetos</h2>
    <div className="card-grid">
      {CardProject.map((card)=>(
        <div className="card-container" id={card.id} key={card.id}>
          <div className='image-container'>
            <img className='img-resolution' src={card.imgUrl} />
          </div>
          <div className="card-content">
            <div className="card-title">
              <h3>{card.title}</h3>
            </div>
          </div>
          <div className="card-btn">
            <button>
              <a href={card.url} target="_blank">
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