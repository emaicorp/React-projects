import React from "react";
import img from "./images/katie-zaferes.png";
import img1 from "./images/katie-zaferes.png";
import img2 from "./images/katie-zaferes.png";
import img3 from "./images/star.png";


 export default function About(){
   const card = (
      <section className="card">
        <img src={img}/>
        <div className="card--stats">
            <img src={img3}/>
            <span >5.0</span>
            <span className="gray">(6).</span>
            <span className="gray">USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className="bold">From $136</span> / Person</p>
      

       </section>
   )
    return(
       <div className="card-div">
         {card}
         {card}
       </div>
    )
 }