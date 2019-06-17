import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';


class Home extends Component {
  render() {
    return (
            <div className="front-section jumbotron jumbotron-fluid main-section">
              <div className="row">
                  <div className="col-md-12">          
                    
                    <div className="front-text-block front-text-left">

                        <div className="front-texts">
                        
                          <b>Enable Digital Transformation</b>
                          <div>to elevate Enterprise Value</div>
                          <br/>
                          <br/>
                          <button className="learn-more-btn">
                              <Link className="learn-more" to = "/what-we-do">
                                Learn More...
                              </Link>
                          </button>
                        </div>
                        
                    </div> 

                  </div>
              </div>
            </div>
        
    );
  }
}

export default Home;
