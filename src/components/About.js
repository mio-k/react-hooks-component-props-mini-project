import React from "react";

function About({image, about, imgSrc = "https://via.placeholder.com/215"}){
return(
    <aside>
        <img src= {image ||imgSrc} alt="blog logo" />
        <p>{about}</p>
    </aside>
)
}


export default About;