import React from "react";
import "./Banner.css";
import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Banner = () => {
  const [nama, setNama] = useState("Inixindo Jakarta");

  const handleClik = () => {
    setNama("Inixindo Academy");
  };

  return (
    <section className="mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center flex-column order-lg-1 order-2">
            <Slide>
              <h1>
                Continous Learning Keep Up To Date with{" "}
                <strong className="text-primary">{nama}</strong>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                incidunt ex laudantium nam iste, reiciendis consectetur vero
                ullam, aliquam facilis, quo a accusamus porro distinctio dolor.
                Inventore iusto laborum quibusdam!
              </p>
              <div className="mt-4">
                <button
                  onClick={handleClik}
                  className="btn btn-outline-primary"
                >
                  Get Started
                </button>
              </div>
            </Slide>
          </div>
          <div className="col-md-6 order-lg-2 order-1">
            <Fade>
              <img
                src="images/banner.svg"
                className="img-fluid animation"
                alt="logo banner"
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
