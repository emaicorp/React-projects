import React from "react";
import img from "./images/katie-zaferes.png"

 export default function About(props){

   console.log(props)
    return(
       
      <section className="card">
        <img src = {props.img}/>
        <div className="card--stats">
            <img src={props.img2}/>
            <span >{props.span1}</span>
            <span className="gray">{props.span2}</span>
            <span className="gray">{props.span3}</span>
        </div>
        <p>{props.p1}</p>
        <p><span className="bold">{props.span4}</span>{props.p2}</p>
      

       </section>
 
    )
 }