import React from "react";
import './about.css';
export default function About()
{
  
	return(<div className="about">
                <h1
                 style={{ 
                	textAlign: "center" ,
                	fontSize:55,
                	paddingTop:"1em"
                           }}
                           > About Us</h1>
               <p 
                 style={{ width: "75%", 
                 margin: "auto",
                  paddingTop: "1em" ,
                  overflow:"auto"}}>

                 #inlude-A techno learning club associated with talent,knowledge and learning is the
                 official club of Information Technology Department. We are a collaboration of zealous 
                 learners who aim to promote and develop coding skills of sudents by organising sessions,
                 coding competitions and hackathons and support them throughout their journey .
              </p>
            </div>
            )
  }