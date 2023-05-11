import React from "react";
import ReactDOM  from "react-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Interest from "./Components/Interest";
import Footer from "./Components/Footer";

export default function App(){
    return(
        <div>
             <Header/>
               <Hero/>
     <div>
        <About
        img="hi\src\images\airbnb-logo.png"
        p1= "hello world"
        p2 = "react is great"
        />
     </div>
      

            
            <Interest/>
            <Footer/>
       
        </div>
    )
}