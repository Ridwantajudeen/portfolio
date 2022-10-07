import React from "react";
import fintech from "./fintech.png"
import todo from "./todo.png"
import emrald from "./emrald.png"

function Projects(){
    return(
        <div className="projects">
            <div>
            <h1 className="project-head">Take A look at some of my woks</h1>
            </div> 
            <div className="works">
            <div className="fintech">
            <h1 className="pro-name">A FINTECH APP</h1>
                 <img src={fintech} className="project-image" alt=''/>
               <a href="https://fintech-app-8y8f.vercel.app/">
                <h2 className="view">View Project</h2></a> 
                </div>
            <div className="tod">
            <h1 className="pro-name">A To-Do list App</h1>
                 <img src={todo} className="project-image" alt=''/>
               <a href="https://ridwantajudeen.github.io/to-do-list/">
                <h2 className="view">View Project</h2></a> 
                </div>
            <div className="salon">
            <h1 className="pro-name">A Salon Web Page</h1>
                 <img src={emrald} className="project-image" alt=''/>
               <a href="https://ridwantajudeen.github.io/emrald-salon/">
                <h2 className="view">View Project</h2></a> 
                </div>
            </div>
        </div>
    )
}
export default Projects;