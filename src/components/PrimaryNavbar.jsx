import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/primaryNavbar.css'



export default class PrimaryNavbar extends Component {
  
  render() {
    const pagesArray = [
      {
        path: '/who-we-are',
        name: 'Who We Are'
      },
      {
        path: '/what-we-do',
        name: 'What We Do',
      },
      {
        path: '/case',
        name: 'Case Studies',
        dropdown: [
          {
            path: '1',
            name: 'Beyond the Firewalls',  
          },
          {
            path: '2',
            name: 'Operationalize Intelligence',
          },
          {
            path: '3',
            name: 'Analytics Taxonomy of Digital Marketing',
          },
          {
            path: '4',
            name: 'Centralizing Data Science',
          },
        ]
      },
      {
        path: '/contact',
        name: 'Contact Us',
      }
    ]
    return (
      <div > 
        <nav className="navbar navbar-expand-lg temp-navbar-bg temp-navbar-margin">
              <div data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link className="navbar-brand temp-navbar-brand" 
                    to = "/"  
                    onClick={window.scrollTo(0, 0)}>
                  <img src="res/drawing_2.svg" alt="ngenux logo" height="30px"/>
                </Link>
              </div>
               <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
             
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="nav navbar-nav ml-auto navbar-right">
                     {
                       pagesArray.map(((page, i) => {
                          return(
                            page.dropdown ?
                              <li className="drowdown pos-relative"
                                  key ={i}
                                  >
                                  <Link className="nav-link dropdown-toggle" data-toggle="dropdown" href="#top" to="#top">{page.name}</Link>
                                  <ul className="dropdown-menu temp-navbar-bg">
                                    {
                                      page.dropdown.map((d, i)=>{
                                        return(
                                          <li key={i}
                                            data-toggle="collapse" 
                                            data-target=".navbar-collapse.show" 
                                            >
                                              <Link className="dropdown-item font-white" href={page.path+d.path} to={page.path+d.path}>
                                                {d.name}
                                              </Link>
                                            </li>
                                          )
                                      })
                                    }
                                  </ul>
                              </li>
                              :
                              <li className="nav-item"
                                  key ={i}
                                  data-toggle="collapse" 
                                  data-target=".navbar-collapse.show" >
                                  <Link className={"nav-link" + (page.name === 'Contact Us' ? " contact-us-btn" : "")} href={page.path} to={page.path}>{page.name}</Link>
                              </li>
                          )
                       }))
                     }
                 </ul>
                 
               </div>
            </nav>
          {/* <Navbar inverse collapseOnSelect className="customized-navbar">
            <Navbar.Header>
              <Navbar.Brand>
                <Link to = "/"  onClick={window.scrollTo(0, 0)}>
                  <img
                    src="res/drawing_2.svg"
                    alt=""
                    className="img-fluid rounded"
                    />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight activeHref={window.location.pathname}>
                <NavItem eventKey={1} componentClass={Link} href="/what-we-do" to="/what-we-do">
                 What We Do
                </NavItem> 
                <NavItem eventKey={2} componentClass={Link} href="/who-we-are" to="/who-we-are">
                  Who We Are
                </NavItem> 
                <NavItem eventKey={3} componentClass={Link} href="/why-us" to="/why-us">
                  Why Us
                </NavItem> 
                <NavItem eventKey={4} componentClass={Link} href="/contact"  to="/contact">
                  CONTACT
                </NavItem> 
              </Nav>
            </Navbar.Collapse>
          </Navbar>   */}  

      </div>
    );
  }
}


