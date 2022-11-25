import React from "react";
import myimage from "./myimage.jpg";
import github from "./GitHub.png";
import linkedin from "./linkedin.png"
import twitter from "./twitter.png"
import phone from "./phone.png"
import email from "./email.png"

import Hirebtn from "./Hirebtn";
import Pprops from "./Projectprops";

function Header(){
    return(
        <div className="header">
            <div>
            <div className="myheader">
            <div className="my-image">
                <img src={myimage} className="myimage"  alt=''/>
            </div>
            <div className="about" >
                <p id="about-intro">Hello, My name is Ridwan Tajudeen.<br/> <br/>I am a Knowledgeable Front End Web Developer adept at creating successful
websites that meet User's needs.  produce plans and improve
designs for usability and functionality. </p>
            </div>
            
            </div>
            <Pprops/>
            </div>
            <div className="details">
                <div className="det-up">
            <h1 className="title">EDUCATION</h1>
            <h2 className="sub">Olusegun Agagu University of Science and Technology<br/> 
Okitipupa, Ondo State.<br/><br/>
Bachelor of Science: Industrial Chemistry</h2>
<h1 className="title">SKILLS</h1>
<ul className="sub">
   
    <li>Front End Web Development
</li>
<li>Web Design</li>
    <li>Web Optimization</li>
    <li>Code Debugging</li>
    <li>Git</li>
    <li>Team Management
</li>
</ul>
<h1 className="title">CONTACT</h1>
<ul className="sub">
    
   
    <li className="sub">PHONE:
+2348163422787
</li>
<li className="sub">EMAIL:
ridwantajudeen8@gmail.com</li>
   
</ul>
</div>

<div className="social-icon">
<div className="social">
    <a href="https://github.com/Ridwantajudeen"> <img src={github} className="github" alt=""/></a>
    <a href="mailto:ridwantajudeen8@gmail.com"> <img src={email} className="email" alt=""/></a>
    <a href="tel:+2348163422787"><img src={phone} className="phone" alt=""/></a>
    <a href="https://twitter.com/Ritajtimi"> <img src={twitter} className="twitter" alt=""/></a>
    <a href="https://www.linkedin.com/in/ridwan-tajudeen/"><img src={linkedin} className="linkedin" alt=""/></a>
</div>
</div>
     <Hirebtn/>
        </div>
        </div>
    )
}
export default Header;