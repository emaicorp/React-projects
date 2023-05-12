import React from "react";


 export default function About(props){

   console.log(props) 
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  }else if(props.location === "Online"){
    badgeText ="ONLINE"
  }


    return(
       
      <section className="card">
       {badgeText && <div className="card--badge">{badgeText}</div>}
   
        <img src = {props.img}/>
        <div className="card--stats">
        <img src = {props.ratingStar}/>
            <span >{props.rating}</span>
            <span className="gray">{props.reviewCount}</span>
            <span className="gray">{props.country}</span>
        </div>
        <p className="class--title">{props.title}</p>
        <p className="card--price"><span className="bold">{props.price}</span>{props.person}</p>
    


       </section>
 
    )
 }