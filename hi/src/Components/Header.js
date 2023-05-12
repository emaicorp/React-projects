import React from "react";
import img from "./580b57fcd9996e24bc43c513.png";

export default function Header(props){
    return (
      <nav>
        <img src={props.img} width={200}/>
      </nav>
    )
  }