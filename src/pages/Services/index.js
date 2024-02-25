import React from 'react';
import PropTypes from 'prop-types';
import './Services.scss';

import Fitness5 from '../../All-images/fitness5.jpg';
import Fitness4 from '../../All-images/fitness4.png';
import Fitness3 from '../../All-images/fitness3.png';

function Services() {
  return (
    <div>
      <section className="section3">
        <div className="section_heding">
          <h3 className="heading">welcome to fitness</h3>
          <div className="line"></div>
          <p>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq</p>
        </div>

        <div className="boxcontainer">
          <ServicesDeta src={Fitness3} title='Basic Crossfit' />
          <ServicesDeta src={Fitness4} title='Fitness Studio' />
          <ServicesDeta src={Fitness5} title='Yoga Classes' />
        </div>
      </section>
    </div>
  );
}

function ServicesDeta(props) {
  return (
    <div className="box">
      <img className="img" src={props.src} alt="fitness Modal" loading='lazy'/>
      <h5 className="">{props.title}</h5>
      <p>Our staff includes amazing professionals that have an eye for crossfit.</p>
      <button className="btn"><a href="">get in touch</a></button>
    </div>
  );
}

// Define propTypes for ServicesDeta component
ServicesDeta.propTypes = {
  src: PropTypes.string.isRequired, // src prop is required and should be a string
  title: PropTypes.string.isRequired, // title prop is required and should be a string
};

export default Services;
