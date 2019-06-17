import React, { Component } from 'react';

import ScrollUpButton from "react-scroll-up-button";

import '../styles/what-we-do.css'

export default class CaseStudiesDiv extends Component {


  render() {
    return (
      <div className="cover-section-2 jumbotron jumbotron-fluid">
         <div className="row">
            <div className="col-md-12">          
               
                  <div className="card-section">
                        <div className="row go-to-card">
                            <div className="col-md-12">
                                <div className="card mb-4">
                                    <div className="card-title padding-20">
                                       <h3 className="blog-head">{this.props.caseData.name}</h3>
                                       {/* <br/>
                                       <span>{new Date().toDateString()}</span> */}
                                    </div>
                                    <div className="card-body row">
                                       {this.props.caseData.text}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <ScrollUpButton />

                        
                  </div>

            </div>
         </div>
      </div>
    );
  }
}

