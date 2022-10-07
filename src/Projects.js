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
                 <img src={fintech} className="project-image" alt=''/>
               <a href="https://fintech-app-8y8f.vercel.app/"><h1>A FINTECH APP</h1>
                <h2 className="view">View Project</h2></a> 
                </div>
            <div className="tod">
                 <img src={todo} className="project-image" alt=''/>
               <a href="https://ridwantajudeen.github.io/to-do-list/"><h1>A To-Do list App</h1>
                <h2 className="view">View Project</h2></a> 
                </div>
            <div className="salon">
                 <img src={emrald} className="project-image" alt=''/>
               <a href="https://ridwantajudeen.github.io/emrald-salon/"><h1>A Salon Web Page</h1>
                <h2 className="view">View Project</h2></a> 
                </div>
            </div>
        </div>
    )
}
export default Projects;