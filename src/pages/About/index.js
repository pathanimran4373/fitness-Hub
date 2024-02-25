import React from "react";
import "./About.scss";
import fitness2 from "../../All-images/fitness2.jpg";

import Trainer from "../../component/aboutTrainer";

function About() {
  return (
    <div>
      <section class="section2" id="about">
        <div class="section2_content">
          <h2>ABOUT US</h2>
          <div class="line"></div>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolorem, laborum saepe repellendus quae expedita
            tempora assumenda unde, ducimus deleniti quas vitae ut error vel
            blanditiis velit. Cupiditate labore blanditiis tempora?
          </p>
          <button class="btn">
            <a href="#">get in touch</a>
          </button>
        </div>
        <div class="sec2img">
          <img src={fitness2} alt="logo" loading="lazy"/>
        </div>
      </section>
      <React.Fragment>
        <Trainer />
      </React.Fragment>
    </div>
  );
}

export default About;
