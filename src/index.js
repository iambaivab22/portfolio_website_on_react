import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import {Themeprovider} from './Contextdata.js';
import {BrowserRouter} from 'react-router-dom';





ReactDOM.render(
  <>
  <BrowserRouter>
  <Themeprovider>
  <App />
  </Themeprovider>
  </BrowserRouter>
 </>
  ,
  document.getElementById('root')
);

