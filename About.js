import React from 'react';
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}>
        </div>
        <div className="aboutBottom">
            <h1> ABOUT US </h1>
            <p> At Kavinda Pizzas, we believe that every slice should be a delightful experience.
                 Our passion for crafting the perfect pizza comes from using only the freshest ingredients,
                  hand-tossed dough, and rich, flavorful toppings. Whether you're craving a classic Margherita
                   or a loaded Pepperoni, we guarantee that every bite will bring a taste of joy. 
                   Join us in celebrating the love of pizza, one delicious slice at a time!</p>
        </div>
    </div>
  )
}

export default About;