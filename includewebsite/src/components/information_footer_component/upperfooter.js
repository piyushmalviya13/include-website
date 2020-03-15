         import React from "react";
import './footer.css';

function UpperFooter(){
return(
            <div className='upper'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <meta name="viewport" content="width=device-width, intial-scale=1"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
               <div className='footerDiv'>

                  <h2>Visit Our Office</h2>
                  <hr align="left"></hr>
                  <p>23, Sir M. Visvesvaraya Marg,
                    <br/>
                     Vallabh Nagar, Indore 
                     <br/>
                     Madhya Pradesh 452003</p>

                </div>

                <div className='footerDiv borderr'>

                  <h2>Start a Conversation
                  <hr align="left"/></h2>
                  <i class="glyphicon glyphicon-envelope"></i>
                  <a class="mail-id"  href="mailto:#0"> contactus@includesgsits.tech</a>
                  <br/>
                  <a class="fa fa-phone"  href="tel:+918085052728"> +91 8085052728</a>
                  <br/>
                </div>

                 <div className="footerDiv">
                     <h2>Connect With Us
                  <hr align="left"/></h2>
                    <a class="fa fa-facebook fam"  href="https://www.facebook.com/hashincludesgsits"> Facebook</a>
                    <br/>
                    <a class="fa fa-instagram fam"  href="https://www.instagram.com/include._/"> Instagram</a>
                    <br/>
                    <a class="fa fa-linkedin fam"  href="https://www.linkedin.com/company/include-sgsits/"> LinkedIn</a>
                  </div>
           </div>
);
}
  export default UpperFooter;         
          