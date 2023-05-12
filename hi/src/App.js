import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Interest from "./Components/Interest";
import Footer from "./Components/Footer";
import data from "./data";

console.log(data)

export default function App(){
  const itemElements = data.map(item =>{
    return <About
    key ={item.id}
  {...item}
     
     />
  }) 
    return(
        <div>
             <Header img="./images/airbnb-logo.png"/>
               <Hero/>
               <div className="card1">
        {itemElements}
           
</div>

      

            
            <Interest/>
            <Footer/>
       
        </div>
    )
}//<About
//img={img1}
//p1= "hello world"
//p2 = "react is great"
///>
// <About
//img={img1}
//p1= "hello world"
//p2 = "react is great"
///>