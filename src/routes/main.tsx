import '@/css/global.scss'
import '@/css/main.scss'

import { Link } from "react-router-dom";

export default function Main() {

  const title = "Antoine Jézéquel";

  const links = [
    {
      label : "Worka",
      to : ""
    },
    {
      label : "About and experience",
      to : "projets"
    },
    {
      label : "Playground",
      to : ""
    },
    {
      label : "Contact",
      to : ""
    },
    {
      label : "2022",
      to : ""
    }
  ]

  const speetch = [
    {
      iconClass : "star",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla fuga dicta totam numquam quas commodi, modi dolore quibusdam, consectetur voluptatibus aliquam perferendis at? Voluptates cupiditate vitae vel sapiente dolores ad.",
    },
    {
      iconClass : "star",
      description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem veritatis similique libero incidunt repudiandae, itaque laboriosam, quod possimus eligendi velit magnam dolorum eaque. Ea eligendi vero facilis quaerat fuga commodi.",
    }
  ] 

  return (
    <>
      <section id="first-step" >

        <h1>
          { title } 
        </h1>

        <nav>
          {
            links && links.map( ( lk, i ) => {
              return <Link to={lk.to} key={i} >
                <span className="nav-index" >{ indexGenerator(i) }</span>
                <span className='nav-label' >{ lk.label }</span>
              </Link>
            })
          }
        </nav>

        <div id='ct-speetch' >
          {
            speetch && speetch.map( ( card ,i ) => {
              return <div className='card' key={i} >
                <i className={card.iconClass} />
                <p>{ card.description }</p>
              </div>
            })
          }
          <img src="https://picsum.photos/200" alt="main logo" />
        </div>

      </section>
    </>
  );
}


function indexGenerator( index:Number ) : String { 
  index++;
  return index < 10 ? `0${index}` : index.toString()
}