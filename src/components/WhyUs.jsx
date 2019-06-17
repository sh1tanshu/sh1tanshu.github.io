import React, { Component } from 'react';

import '../styles/why-us.css'

class WhyUs extends Component {
  render() {
    return (
          
          <div className="card-section container-fluid main-section">
      
              <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-4">
                              <div className="card mb-4 card-special">
                                <img alt="" className="card-img-top" src="../res/cardimage1.png"/>
                                <div className="card-body">
                                    <h5 className="card-title">DATA ENGINEERING</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#top" className="btn btn-outline-dark btn-sm">Go somewhere</a>
                                </div>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="card mb-4 card-special border-dark">
                                <img alt="" className="card-img-top" src="../res/cardimage2.png"/>
                                <div className="card-body">
                                    <h5 className="card-title">BI & ANALYTICS</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#top" className="btn btn-dark btn-sm">Go somewhere</a>
                                </div>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="card mb-4 card-special text-white bg-dark">
                                <img alt="" className="card-img-top" src="../res/cardimage3.png"/>
                                <div className="card-body">
                                    <h5 className="card-title">AI & ML</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#top" className="btn btn-outline-light btn-sm">Go somewhere</a>
                                </div>
                              </div>
                          </div>
                        </div>
              </div>

            </div>
        
        
    );
  }
}

export default WhyUs;
