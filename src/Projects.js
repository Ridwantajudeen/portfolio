import React from "react";
import {Zoom} from "react-reveal"
import fintech from "./fintech.png"
import todo from "./todo.png"
import emrald from "./emrald.png"

function Projects(props){
    return(
        <div className="projects">
            <div>
            <h1 className="project-head">Take A look at some of my works</h1>
            </div> 
            <div className="works">
            <div className="fintech">
            <h1 className="pro-name">{props.pro}</h1><Zoom>
                 <img src={fintech} className="project-image" alt=''/>
                 </Zoom>
               <a href="https://fintech-app-8y8f.vercel.app/">
                <h2 className="view">View Project</h2></a> 
                </div>
            <div className="tod">
            <h1 className="pro-name">A To-Do list App</h1>
                   <Zoom>
                       <img src={todo} className="project-image" alt=''/>
                 </Zoom>
               <a href="https://ridwantajudeen.github.io/to-do-list/">
                <h2 className="view">View Project</h2></a> 
                </div>
            <div className="salon">
            <h1 className="pro-name">A Salon Web Page</h1>
            <Zoom>
                 <img src={emrald} className="project-image" alt=''/>
                 </Zoom>
               <a href="https://ridwantajudeen.github.io/emrald-salon/">
                <h2 className="view">View Project</h2></a> 
                </div>
            </div>
        </div>
    )
}
export default Projects;