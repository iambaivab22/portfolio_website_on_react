import './Banner.css';

const Bannernew=()=>{
	return(

		<div className="container">
        

        <div className="row banners">
        <div className="col-lg-7 col-md-12 eachbannersection">

           <div className="sociallinks">
          <a href=""><i className="fa fa-facebook icons" aria-hidden="true"></i></a>
          <a href=""><i className="fa fa-github icons" aria-hidden="true"></i></a>
          <a href=""><i className="fa fa-instagram icons" aria-hidden="true"></i></a>
          <a href=""><i className="fa fa-twitter icons" aria-hidden="true"></i></a>
          <a href=""><i className="fa fa-linkedin icons" aria-hidden="true"></i></a>
          </div>


           <div className="Introduction">
          <br/>
          <h2 className="iambaivab text-center">I am Baivab Bidari</h2>
         <div className="allskills">
         <div className="eachskills">Web developer</div>
         <div className="eachskills">Content writer</div>
         <div className="eachskills">Graphic Designer</div>
         <div className="eachskills">SEO Experts</div>
         
         



         </div>
          <br />

          <div className="buttons">
          <div className="firstbtn">
            <a href="cvfinal.pdf" className="eachbutton" download>Download CV</a>
          </div>

              <div className="secondbtn">
              <a href="cvfinal.pdf" target="_blank" className="eachbutton">About me</a>

          </div>

          </div>









      </div>











          </div>

        

        <div className="col-lg-5 col-md-12 imagesection each_bannersection">

          <img src="wall.png" className="img-fluid photo" />

        </div>




        


        </div>







        </div>









       

		)
}
export default Bannernew;