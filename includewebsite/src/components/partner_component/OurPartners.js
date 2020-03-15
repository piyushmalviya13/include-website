import React from "react";
import './OurPartners.css';
import hackerEarth from './hackerearth.png';
import codeChef from './codechef.png';
import Mozilla from'./mozilla.png';
import interviewBit from './interview.png';
import Microsoft from './microsoft.png';
function Footer() {

  return (
    <div>
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <meta name="viewport" content="width=device-width, intial-scale=1"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
       <div className="tie-up">
               <div className="tieupheading">
                      <h3>Our Partners / Tie-Up</h3>
               </div>
              
               <div className="tieicons">
                
                    <div className="images">
                           <img src={Mozilla} width="150px" height="130px"/>
                    </div>
                     <div className="images ">
                          <img src={codeChef} width="150px" height="130px"/>
                    </div>
                     <div className="images img2">
                         <img src={hackerEarth} width="150px" height="130px"/>
                     </div>
                     <div className="images images1">
                           <img src={interviewBit} width="150px" height="130px"/>
                    </div>
                     <div className="images image3">
                           <img src={Microsoft} width="150px" height="130px"/>
                    </div>
                
              </div>   
        </div>
             
</div>
  );

}



export default Footer;