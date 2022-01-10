import React,{useState} from 'react';
import Sociallinks from '../Socialllinks/Sociallinks';
import './Footer.css';
const Footer=()=>{

	const [footerdata]=useState({address:"Kathmandu",email:"baivabbidari@gmail.com",phone:"9860349993"})
	return(
		<>

<div className="container address mt-5 text-center">
<p>{footerdata.address}</p>
<p>{footerdata.phone}</p>
<h3>{footerdata.email}</h3>

<Sociallinks />
</div>

<div className=" container copyrightsection justify-content-center">
<p>©Baivab Bidari,2022 All rights reserved</p>
</div>



</>
		)
}

export default Footer;