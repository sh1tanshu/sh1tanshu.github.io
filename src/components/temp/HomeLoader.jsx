import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import ContentLoader from "react-content-loader";


export default class HomeLoader extends Component {
  
  
  constructor(props){
    super(props)
      this.state = {
        loading: true
      }
  }

      
  /* loadPage() {
    this.setState({
      loading: !this.state.loading
    })  
  } */

  componentDidMount(){
    /* setInterval(this.loadPage(), 3000); */
    setInterval(() => {
      this.setState({ loading: !this.state.loading });
    }, 1000);
  }


  PageLoader = () => (
    <ContentLoader 
      height={600}
      width={1800}
      speed={1}
      primaryColor="#98cbfd"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="10" rx="3" ry="3" width="800" height="51" /> 
      <rect x="0" y="70" rx="3" ry="3" width="650" height="45" /> 
      <rect x="0" y="200" rx="3" ry="3" width="200" height="40" /> 
    </ContentLoader>
  )

  PageData = () => (
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
  )
  
  
  render() {
    return (

      <div>
      
      
      
            <div className="front-section jumbotron jumbotron-fluid">
              <div className="row">
                  <div className="col-md-12">          
                    
                    <div className="front-text-block front-text-left">

                      {
                        this.state.loading ? 
                          this.PageLoader()
                          :
                          this.PageData()
                      }
                        
                    </div> 

                  </div>
              </div>
            </div>
      
      </div>
        
    );
  }
}

