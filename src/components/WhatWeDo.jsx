import React, { Component } from 'react';
import WhatWeDoSection from './WhatWeDoSection.jsx';

import { WhatWeDoData } from '../constants/WhatWeDoConstants.jsx';

import ScrollUpButton from "react-scroll-up-button";
/* import LazyLoad from 'react-lazy-load'; */

import '../styles/what-we-do.css'


export default class WhatWeDo extends Component {


  render() {
    return (
      <div className="cover-section-2 jumbotron jumbotron-fluid">
         <div className="row">
            <div className="col-md-12">          
               
                  <div className="card-section">
                        <div className="container-fluid main-section">
                                 <div className="row top-cards-align">
                                    {
                                       WhatWeDoData.map((data, i) => {
                                          return (
                                             <div key={i} className="col-md-4">
                                                <div className="card mb-4 card-special">
                                                   <img alt="" className="card-img-top" src={require('../images/cardimages/'+data.image)}/>
                                                   <div className="card-body">
                                                      <h5 className="card-title">{data.heading}</h5>
                                                      <p className="card-text">{data.description}</p>
                                                      <a href={"#row"+i} className="btn btn-outline-dark btn-sm">More...</a>
                                                   </div>
                                                </div>
                                             </div>
                                          )
                                       })
                                    }
                                 </div>
               
                        </div>
                  
                        <ScrollUpButton />

                        {
                           WhatWeDoData.map((data, i) =>{
                              return(
                                 <div key={i} className="main-section">
                                    <div id={"row"+i} className="padding-bottom-20"/>
                                    <WhatWeDoSection data={data}/>
                                 </div>
                              )
                           })
                        }
                        
                        
                        {/* 
                        <div className="card-section">
                                 
                                 <div className="row go-to-card">
                                       <div className="col-md-12">
                                          <div className="card mb-4">
                                          <img alt="" className="card-img-top" src="../res/cardimage1.png"/>
                                          <LazyLoad 
                                                width={100}
                                                height={100}
                                                debounce={false}
                                                offsetVertical={500}
                                                >
                                                <img alt="" className="card-img-top" src="../res/cardimage1.png"/>
                                          </LazyLoad>
                                             <div className="card-body">
                                                <h5 className="card-title">DATA ENGINEERING</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#top" className="btn btn-outline-dark btn-sm">Top</a>
                                             </div>
                                          </div>
                                       </div>
                                 </div>
                        </div>
                         */}
                        
                     </div>

            </div>
         </div>
      </div>
    );
  }
}

