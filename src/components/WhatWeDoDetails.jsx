import React, { Component } from 'react';

import '../styles/what-we-do.css'


export default class WhatWeDoDetails extends Component {


  render() {
   const logo = require('../images/logos/'+this.props.icon)
   return (
      <div className="col-lg-6 row padding-bottom-20 center-mob">
         <div className="col-md-3 center-tab">
            <img alt="" className="wwd-icon img-fluid" src={logo}/>
         </div>
         <div className="col-md-9">
            <h4 className="padding-bottom-20">{this.props.subHeading}</h4>
            <p className="padding-bottom-20">{this.props.detailText}</p>
            <span className="padding-bottom-20"><a href="#top" className="link-icon-color hide-this">Learn More...</a></span>
         </div>
      </div>
    );
  }
}

