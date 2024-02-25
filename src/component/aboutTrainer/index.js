import React from 'react';
import PropTypes from 'prop-types';
import './Trainer.scss';
import fitness7 from '../../All-images/fitness7.jpg';
import fit8 from '../../All-images/fit8.jpg';
import fit9 from '../../All-images/fit9.jpg';

function Trainer() {
  return (
    <div>
      <section className="section5" id="contact">
        <div className="section_heding">
          <h3>expert trainer</h3>
          <div className="lineItem"></div>
        </div>

        <div className="section5_container">
          <AboutDeta img={fitness7} name='Sara Millair' work='Spinning Trainer'/>
          <AboutDeta img={fit8} name='Karter Sleg' work='Yoga Trainer'/>
          <AboutDeta img={fit9} name='Joan Methu' work='Body Trainer'/>
        </div>
      </section>
    </div>
  );
}

function AboutDeta(props) {
  return (
    <div className="section5_box">
      <img className="img" src={props.img} alt={props.name} loading='lazy' />
      <div className="s5b">
        <h5>{props.name}</h5>
        <span>{props.work}</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum tenetur obcaecati, quidem corrupti iste distinctio hic </p>
        <div className="social_icon">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>
    </div>
  );
}

// PropTypes for AboutDeta component
AboutDeta.propTypes = {
  img: PropTypes.string.isRequired, // img prop is required and should be a string
  name: PropTypes.string.isRequired, // name prop is required and should be a string
  work: PropTypes.string.isRequired // work prop is required and should be a string
};

export default Trainer;
