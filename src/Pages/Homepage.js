
import React from 'react';
import Bannernew from '../Components/Bannersection/Bannernew.js';
import Services from '../Components/Services/Services.js';
import Project from '../Components/Project/Project.js';
import Aboutme from '../Components/Aboutme/Aboutme.js';
import Contactme from '../Components/Contactme/Contactme.js';

import Testimonials from '../Components/Testimonial/Testimonials';

const Homepage=()=>{
	return(
		<>
  <Bannernew />
     <Services />
     <Contactme />
     <Testimonials />
     <Aboutme />
     <Project />
     </>

     )

 }

 export default Homepage;