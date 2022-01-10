import React from 'react';
 import './Eachservices.css'; 
 const Eachservices=(props)=>{
 	console.log(props);
 	return(
      <>
 
 
    
        
      <div className="iconimage">
       
        <img src={props.photo} alt="baivab" className="img-fluid services_icon text-center" />
      
     </div>
     
           <h4 className="text-center service_name">{props.title}</h4>
 <p className="text-center service_desc">{props.description}</p>
      <div className="btns">
     <button className="text-center" className="githublinks"><a href={props.gitlink} target="_blank" >{props.buttonname}</a></button>
</div>

 
 </>
 );
 }

 export default Eachservices;