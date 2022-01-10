import React,{useState}from 'react';
import './Contactme.css';

const Contactme=()=>{
const [addressdata,setaddressdata]=useState([{
	icon:"fa fa-map-marker icons",
	detail:"Kalanki,kathmandu"
},{
	icon:"fa fa-paper-plane icons",
	detail:"baivabbidari@gmail.com"
},{
icon:"fa fa-phone icons",
detail:"+977-9860349993"

}]);
	return(
    <>
    <div className="container">
    <div className="row contactrow justify-content-between">
    

    


    <div className="col-lg-4 col-sm-12 contact_first">
    <div className="contact_intro">
     <h2 className="contacttitle text-center">My Address Details </h2>
    </div>
      {addressdata.map((item)=>{
      	return(
      		<>
               <div className="row justify-content-between">
    <div className="col-5">

     <div className="exacticon">
          <i className={item.icon} aria-hidden="true">
          </i>
          </div>

      </div>

<div className="col-6 address_data justify-content-start">
<h6>{item.detail}</h6>

</div>
</div>
      		</>
      		)
      })

  }
   </div>


   <div className="col-lg-7 col-sm-12 contact_second">
    

<h2 className="text-center">Lets Talk About Your Project</h2>
        <div className="row justify-content-between">

        <div className="col-6 eachform">
        <div className="input-group mb-3 inputboxodd">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1"><i className="fa fa-user-circle-o" aria-hidden="true"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
</div>
    </div>
         <div className="col-6  eachform">
         <div className="input-group mb-3 inputboxeven">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1"><i class="fa fa-building" aria-hidden="true"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="Company Name" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
</div>




<div className="col-6 eachform">
         <div className="input-group mb-3 inputboxodd">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1"><i class="fa fa-phone" aria-hidden="true"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
</div>
</div>



<div className="col-6 eachform">
         <div className="input-group mb-3 inputboxeven">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="Address" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
</div>


<div className="col-lg-12 col-sm-6 eachform">
         <div class="input-group mb-3 inputboxodd">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
</div>
</div>


<div className="col-12 text-center submitbox">
<input type="submit" className="btn" />


</div>

</div>










   </div>

    







    </div>

    </div>

    </>

		);
}

export default Contactme;