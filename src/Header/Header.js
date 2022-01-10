import React,{useState} from 'react';
import "./Header.css";
import  Toggle from '../Toggle/Toggle.js';
import {Link} from 'react-router-dom';

const Header=()=>{

	const[data,setdata]=useState(false);

	const hamburgerfunction=()=>{
		setdata(!data);
	}
	return(
      <>




      
      <div className="container navbar">
      <div className="logos">
         <h3>Baivab</h3>
      </div>




    <div className=" hamburger">
 <i className="fa fa-bars" aria-hidden="true" onClick={hamburgerfunction}></i>

      </div>




  <div className=" togglebar_style ">
      <Toggle />

      </div>


 <div className="menu_box">
<ul className={data?"menu_item mobilestyle":"menu_item"}>
<li><Link to='/'>Home</Link></li>
<li><Link to="/services">Services</Link></li>
<li><Link to="/contact">Contact</Link></li>

<li><Link to="/testimonials">Testimonial</Link></li>
<li><Link to="/aboutme">About me</Link></li>






</ul>
      </div>

    

      




     
      </div>
      </>
		);
}

export default Header;