
import Eachservices from '../Services/Eachservices';
import React,{useState} from 'react';
import Hrline from '../Hrline/Hrline.js';
import './Project.css';
const Project =()=>{
		const [project_data]=useState([{

                title:"CryptoTracker",
                des:"Fully responsive,implementation of material ui,different react hooks,context api react router etc",
                  link:"https://github.com/iambaivab22/Reactproject"    



			},{
				 title:"React Monster",
                des:"implemented react class based component,search functionality,scraped monsterapi",
               link:"https://github.com/iambaivab22/reactmonster"
			},{
				 title:"Portfolio Website",
                des:"Fully responsive design,implementation of redux,react-router,contextapi,different react hooks",
                link:"https://github.com/iambaivab22/portfolio_website_on_react/tree/master"
			}]);
	return(
		
<div className="container">
<div className="pr_des text-center ">PROJECTS THAT I HAVE COMPLETED </div>
<div className="pr_title text-center mb-4 mt-4"><h2>My Projects</h2></div>
    
<Hrline />


<div className="row mt-4 justify-content-between">


{project_data.map((item)=>{
return(
<>
<div className="col-lg-4 text-center ">
<div className="servicecol">

<Eachservices title={item.title} description={item.des} gitlink={item.link} photo="github.png" buttonname="Github" />
</div>
</div>
</>
)

})}






</div>
</div>


		);
}

export default Project;
