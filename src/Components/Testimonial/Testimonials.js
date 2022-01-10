import React,{useState} from 'react';

import './Testimonials.css'
const Testimonials=()=>{

	const [stated]=useState([{name:"sandip Banjara",
		company:"-CEO of Hatasonews.com",
		describe:"I hired him to make my pertfolio website  and he had satisfied me to full  with his exceptional work. They have a great expertise,is dedicated, attentive, talented and care much about the client needs."},
         


      {name:"Pawan Gautam",
		company:"-CEO at Diva It solution",
		describe:"I hired him to make my pertfolio website  and he had satisfied me to full  with his exceptional work. They have a great expertise,is dedicated, attentive, talented and care much about the client needs."



		}]);
        console.log(stated);
		return(
		<>



		<div className="container testimonials">
		<div className="headingtesti text-center">
		<p>WHAT PEOPLE SAY</p>
		<h2>Testimonials</h2>
        <div className="hrline text-center"></div>
		</div>


        
   

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active eachtestimonial">
    
       <h2 className="text-center name">{stated[0].name}</h2>
       <h6 className="text-center company">{stated[0].company}</h6>
       <p className="text-center description">{stated[0].describe}</p> 
         

        <div className="photocontainer">
      
       <img src="wall.png" className="img-fluid testimonial_photo" />
       </div>
    </div>
    <div className="carousel-item eachtestimonial">
        <h2 className="text-center">{stated[1].name}</h2>
       <h6 className="text-center">{stated[1].company}</h6>
       <p className="text-center">{stated[1].describe}</p> 
  <div className="photocontainer">
       <img src="afsir.png" className="img-fluid testimonial_photo" />
       </div>
    </div>
    <div className="carousel-item eachtestimonial">
        <h2 className="text-center">{stated[0].name}</h2>
       <h6 className="text-center">{stated[0].company}</h6>
       <p className="text-center">{stated[0].describe}</p> 
      <div className="photocontainer">
       <img src="Sandipsirfinal.png" className="img-fluid testimonial_photo" />
       </div>
  
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


	


		

	




       </div>


		

    
   



  


		</>
		);
}

export default Testimonials;