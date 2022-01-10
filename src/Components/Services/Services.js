import React ,{useState} from 'react';


 import "./Services.css";
import Eachservices from './Eachservices';
import Hrline from '../Hrline/Hrline.js';
import './Services.css';
const Services=()=>{
    const [forstyle]=useState("Each_services_style")
	const [service_data]=useState([
               

		{
				 title:"Web Development",
                des:"I provide the high quality websites at reasonable price. My Unique design makes your website looks awesome so that it helps you to grow your buisness .so why not to go digital with me?  ",
                img:"web.png",
                link:""
            },

                 {
                    title:"Graphic designer",
                des:"I provide the high quality graphics desgin at reasonable price. My Unique design makes your website looks awesome so that it helps you to grow your buisness .so why not to go digital with me?",
                img:"blogger.png",
                link:""

            }
			,{
				 title:"Content Creation",
                des:"I provide the high professional content at reasonable price. My Unique design makes your website looks awesome so that it helps you to grow your buisness .so why not to go digital with me?",
                img:"illustration.png",
                link:""

			}]);
	


			
	
		return(
			
       <div className="servicessection">
        <div className="services">
        <div className="container">
        <div className="row justify-content-around">
         <div className="col-12 mainservices">
         <div className="heading">
         <h2 className="services_title text-center">Services</h2>

          
         </div>
           <h1 className="myservices text-center">My Services</h1>
         <p className="text-center ">We provide professional services at best price</p>

         <Hrline />



         </div>
         </div>

         
       
        </div>

        </div>

<div className="container servicecols">
<div className="row justify-content-between">


{service_data.map((item)=>{
return(
<>
<div className="col-lg-4 ">
<div className="service_box">

<Eachservices title={item.title} description={item.des} gitlink={item.link} photo={item.img} buttonname="Hire me" />
</div>
</div>
</>
)

})}





</div>

</div>
</div>

 


    
        
       
		)
}


export default Services;