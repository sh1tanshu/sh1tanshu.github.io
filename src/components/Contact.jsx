import React, { Component } from 'react';
import '../styles/contact.css'



export default class Contact extends Component {
  render() {
    return (
      <div className="container-fluid main-section">
              <div className="wrap-contact2-form">
                <div className="contact2-form-form-title">
                  <span className="contact2-form-form-title-1">
                    Contact Us
                  </span>
          
                  <span className="contact2-form-form-title-2 hide-this">
                    Feel free to drop us a line below!
                  </span>
                </div>
          
                <form className="contact2-form-form validate-form" method="post" encType="text/plain">
                  <div className="wrap-contact2-input validate-input hide-this" data-validate="Name is required">
                    <span className="label-contact2-input">Full Name:</span>
                    <input className="contact2-input" type="text" name="name" placeholder="Enter full name"/>
                    <span className="focus-contact2-input"></span>
                  </div>
          
                  <div className="wrap-contact2-input validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <b className="label-contact2-input">Email:</b>
                    <input className="contact2-input" type="text" name="email" value="connect@ngenux.com" disabled/>
                    <span className="focus-contact2-input"></span>
                  </div>
          
                  <div className="wrap-contact2-input validate-input" data-validate="Phone is required">
                    <b className="label-contact2-input">Phone:</b>
                    <input className="contact2-input" type="text" name="phone" value="+91-990-057-8549" disabled/>
                    <span className="focus-contact2-input"></span>
                  </div>
          
                  <div className="wrap-contact2-input validate-input hide-this" data-validate = "Message is required">
                    <span className="label-contact2-input">Message:</span>
                    <textarea className="contact2-input" name="message" placeholder="Your Comment..."></textarea>
                    <span className="focus-contact2-input"></span>
                  </div>
          
                  <div className="container-contact2-form-form-btn">
                    <button className="btn-success contact-us-btn hide-this" type="submit" value="Submit">
                      <span>
                        Submit
                        {/* <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i> */}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            <br/>
      </div>
    );
  }
}


 