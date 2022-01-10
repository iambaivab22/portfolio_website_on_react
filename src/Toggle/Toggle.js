import React,{useState} from 'react';
import './Toggle.css';
import {useContext} from 'react'; 
import {Themecontext} from '../Contextdata.js';

const Toggle =()=>{

	const theme=useContext(Themecontext);
		const [mode,setmode]=useState("fas fa-sun");
		const [data,setdata]=useState(0);
		

         

		// console.log(themestate);
	 //     if(themestate=="true"){

  //            setthemestate("false");
	 //     }
	 //     else{
	 //     	setthemestate("true");
	 //     }
		 

		//  console.log(themestate);

	const handleclick=()=>{
		
     theme.dispatch({type:"Toggle"});
     // setdata(!data);
     // if(data){
     // 	setmode(fas fa-sun)
     // }else{
     // 	setmode(fas fa-moon)
     // }
    
    
	}



	return(
      <>
      <div classname="container toggle_box justify-content-between ">
    
          {
     	theme.state.darkMode?
     	<span className="moon" onClick={handleclick}><i class="fas fa-sun"></i></span>
:  <span className="sun" onClick={handleclick}><i class="fas fa-moon "></i></span>

       
     	}
     
       
      </div>

 
     
     
    

    
     
      </>

		);
}

export default Toggle;


