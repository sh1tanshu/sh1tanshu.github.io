import React, { Component } from 'react';
import WhatWeDoDetails from './WhatWeDoDetails.jsx';

import '../styles/what-we-do.css'


export default class WhatWeDoSection extends Component {
  render() {
    return (
            <div className="card-section padding-bottom-20">
                        <div className="row go-to-card">
                            <div className="col-md-12">
                                <div className="card mb-4">
                                    <div className="card-title center">
                                        <h3>{this.props.data.heading}</h3>
                                    </div>
                                    <div className="card-body row">
                                        {
                                            this.props.data.details.map((dtls, i) => {
                                                return (<WhatWeDoDetails 
                                                    subHeading={dtls.subHeading} 
                                                    detailText={dtls.detailText} 
                                                    icon={dtls.icon} 
                                                    key={i}/>)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
    );
  }
}

