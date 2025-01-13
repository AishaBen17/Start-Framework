import React, { useState } from 'react'
import "./About.css";

export default function About() {


    return <>
    <section id="about" className='min-vh-100  d-flex justify-content-center align-items-center text-white' 
    style={{ backgroundColor: "#E4A11B"}} >
        
         <div className="container-sm">
         <div className="title">
          <h2 className="text-center text-white display-6 fw-bold">ABOUT COMPONENT</h2>

          <div className=" mt-3 mb-3 d-flex justify-content-center align-items-center">
            <div id="line" className="bg-white"></div>
            <i className="fa fa-solid fa-star text-white"></i>
            <div id="line" className="bg-white"></div>
          </div>
        </div>

          <div className="row text-dark g-1 ">
            <div className="col-md-6 px-1 ">
              <p className='display-6'>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 px-1 ">
              <p className='display-6 text-justify'>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>

        </section>
    </>

}
