import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import WhoWeAre from './components/WhoWeAre.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import CaseStudies1 from './components/CaseStudies1.jsx';
import CaseStudies2 from './components/CaseStudies2.jsx';
import CaseStudies3 from './components/CaseStudies3.jsx';
import CaseStudies4 from './components/CaseStudies4.jsx';
/* import WhyUs from './components/WhyUs.jsx'; */
import Contact from './components/Contact.jsx';

import PrimaryNavbar from './components/PrimaryNavbar.jsx';
import FooterNavbar from './components/FooterNavbar.jsx';

class App extends Component {
  render() {
    return (

      <div id="top">
        
        <Router>
          <div>
            <PrimaryNavbar/>
            <Route exact path="/" component={Home}/>
            <Route path="/who-we-are" component={WhoWeAre}/>
            <Route path="/what-we-do" component={WhatWeDo}/>
            <Route path="/case1" component={CaseStudies1}/>
            <Route path="/case2" component={CaseStudies2}/>
            <Route path="/case3" component={CaseStudies3}/>
            <Route path="/case4" component={CaseStudies4}/>
            {/* <Route path="/case-studies/:case" component={CaseStudies}/> */}
            {/* <Route path="/why-us" component={WhyUs}/> */}
            <Route path="/contact" component={Contact}/>
            <FooterNavbar/>
          </div>
        </Router>
        
      </div>

    );
  }
}

export default App;
