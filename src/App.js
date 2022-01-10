import React from 'react';
import Header from './Header/Header.js';
import Bannernew from './Components/Bannersection/Bannernew.js';
import Services from './Components/Services/Services.js';

import {useContext} from 'react'; 
import {Themecontext} from './Contextdata.js';
import Contactme from './Components/Contactme/Contactme.js';
import Aboutme from './Components/Aboutme/Aboutme.js';
import Testimonials from './Components/Testimonial/Testimonials.js';
import Footer from './Components/Footer/Footer.js';

import Project from './Components/Project/Project.js';
import {Switch,Route} from 'react-router-dom';
import Homepage from './Pages/Homepage.js';
const App=()=>{
	const theme=useContext(Themecontext);
	const darkmode=theme.state.darkMode;

	console.log(darkmode);

	return(
      <div style={{backgroundColor:darkmode?"#121212":"white",
      color:darkmode&&"white"}}
      >

         
       <Header />

     <Switch>
        <Route exact path='/' component={Homepage} />
        

     
        <Route  exact path='/contact' component={Contactme} />
           <Route  exact path='/project' component={Project} />
             <Route exact path='/testimonials' component={Testimonials} />
           <Route exact path='/services' component={Services} />
             <Route exact path='/aboutme' component={Aboutme} />
            


     </Switch>


   
   
     
     <Footer />
   
     

      </div>
		);
}

export default App;