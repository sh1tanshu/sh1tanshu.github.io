import React, { Component } from 'react';

import { CaseStudyData } from '../constants/CaseStudyConstants.jsx';

import CaseStudiesDiv from "./CaseStudiesDiv.jsx";

import '../styles/what-we-do.css'

export default class CaseStudies1 extends Component {


   constructor(props){
      super(props)
        this.state = {
         caseData: CaseStudyData[3]
          /* caseData: CaseStudyData.filter(obj=>obj.id===window.location.pathname.split("/")[2])['0'] */
        }
    }

  render() {
    return (
      <CaseStudiesDiv caseData={this.state.caseData}/>
    );
  }
}

