import React from "react";
import './head.css'


const Head = () => {
  const letters = ['L', 'o', 'g', 'i', 'n'];

  return(
    <div className="full">
        {letters.map((letter, index) =>(
            <h1 className="letter" key = {index}>
                {letter}
            </h1>
        ))}
    </div>
  )
}

export default Head;