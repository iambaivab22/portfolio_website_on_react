import React from 'react';
import './Aboutme.css';
const Aboutme=()=>{
	return(
      <div className="container about_me">

      <div className="headingtesti text-center">
		<p>ABOUT ME</p>
		<h2>Let me introduce myself</h2>
        <div className="hrline text-center"></div>
		
		</div>
      <div className="row justify-content-between align-items-center">
      <div className="col-lg-4 col-sm-12 photosdiv">
         <img src="wall.png" className="img-fluid photos text-center" />
      </div>

      <div className="col-lg-6 col-sm-12 text-center">
      <h2>Hi there</h2>
      <p className="aboutmedetail">
      I am currently studying BSC CSIT at ASCOL college Lainchour, Kathmandu.I used to wonder how the internet and the web works during my high school.
      That curiosity attracted me towards the IT Field .Specially on the Web.After SLC i started to study the computer science .since then i started to learn web development.
      today i have created 5  websites .I am especially focused on front-end development. 

      
      
     </p>

      

      <div className="row justify-content-between">
      <div className="col-6 addressdtl">
      <h6>Name:</h6>
      <p>Baivab Bidari</p>
      </div>

      <div className="col-6 addressdtl">
      <h6>Email:</h6>
      <p>baivabbidari@gmail.com</p>
      </div>

      <div className="col-6 addressdtl">
      <h6>Phone:</h6>
      <p>9860349993</p>
      </div>

      <div className="col-6 addressdtl">
      <h6>Linkedin:</h6>
      <p>Baivab Bidari</p>
      </div>
      </div>

      </div>

      </div>

      </div>
		);
}

export default Aboutme;