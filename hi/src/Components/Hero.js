import React from "react";
import img from "./photo-grid.png"


export default function Hero(){
const hero = (
     <section className="hero">
             <img src={img} className="hero-image"/>
   
<h1 className="hero-header">Online Experience</h1>
<p className="hero-text">Join unique interactive activities led by
    one-of-a-kind hosts-all without leaving home.
</p>
<p className="hero-text">Join unique interactive activities led by
    one-of-a-kind hosts-all without leaving home.
</p>

    </section>
)

return(
    <section>
        {hero}
    </section>
   
)

}