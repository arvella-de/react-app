import Card from './Card'
import './Services.css'
import webImage from '../assets/background.jpg'
import webImage2 from '../assets/background1.jpg'
import webImage3 from '../assets/background2.jpg'

export default function Services(){

return(

    <section className="sectionService">

     <h1 className="serviceh1">View our Services</h1>
     
      
    <div className="cardContainer">
    <Card image={webImage}
            title={"Web Development"}
            description={"Learn about the web"}/>

    <Card image={webImage2}
            title={"Programming concepts"}
            description={"Explore data structures"}/>

    <Card image={webImage3}
            title={"Programming Concepts"}
            description={"Dive into programming"}/>



     </div>
     </section>       
        
)   

}