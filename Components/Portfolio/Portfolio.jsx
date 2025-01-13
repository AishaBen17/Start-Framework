import React from "react";
import "./Portfolio.css";
import port1 from "../../src/assets/port1.png";
import port2 from "../../src/assets/port2.png";
import port3 from "../../src/assets/port3.png";

export default function Portfolio() {
  function previewImg(src) {
    document.querySelector("#img-preview").setAttribute("src", src);
    document.querySelector(".preview-img").classList.remove("d-none");
    document.querySelector(".preview-img").classList.add("d-block");
  }

  function closeImg() {
    document.querySelector(".preview-img").classList.remove("d-block");
    document.querySelector(".preview-img").classList.add("d-none");
  }

  return (
    <section
      id="portfolio"
      className="min-vh-100 d-flex justify-content-center align-items-center mt-5 ">
      <div className="container ">
        <div className=" ">
          <h1 className="text-center display-6 fw-bold t-color mtext ">
            PORTFOLIO COMPONENT
          </h1>

          <div className="d-flex justify-content-center align-items-center mb-3">
            <div id="line"></div>
            <i className="fa fa-solid fa-star t-color"></i>
            <div id="line"></div>
          </div>
        </div>


        <div className="row g-4 ">
          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port1)}
            >
              <img src={port1} className="img-fluid" alt="port1" />

              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port2)}
            >
              <img src={port2} className="img-fluid" alt="port2" />

              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port3)}
            >
              <img src={port3} className="img-fluid" alt="port3" />

              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
        </div>


        <div className="row g-4 mt-3 mb-4">
          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port1)}
            >
              <img src={port1} className="img-fluid" alt="port1" />

              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port2)}
            >
              <img src={port2} className="img-fluid" alt="port2" />

              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(port3)}
            >
              <img src={port3} className="img-fluid" alt="port3" />

              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          className="preview-img d-flex justify-content-center align-items-center bg-info bg-opacity-25 position-fixed top-0 start-0 w-100 vh-100 d-none"
          onClick={closeImg}
        >
          <img
            id="img-preview"
            alt="preview img"
            className="w-50 mt-5 rounded-3"
          />
        </div>
      </div>

    </section>
  );
}
