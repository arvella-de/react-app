import './Card.css'
import {useState} from 'react'

export default function Card({ image,title, description}){
    const [showDetails, setShowDetails] = useState(false);

    return(
        
       <div className="card">
            <img
                src={image}
                alt={title}
                className="cardImage"
            />
            <div className="cardContent">
                 <h3>{title}</h3>
                

             {showDetails && <p>{description}</p>}

                <button onClick= {() => setShowDetails(!showDetails)}>
                    {showDetails ? "Show Less" : "Show more"}
                </button>

            </div>
        </div>
        
    )
}