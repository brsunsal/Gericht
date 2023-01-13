import React from 'react';
import {images} from "../../constants";

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img className='spoon__img' src={images.spoon} alt="spoon" />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus in quam sed scelerisque. Cras semper volutpat magna vitae pulvinar. Aliquam id velit et nisl bibendum egestas. Proin non nunc eget risus elementum sodales.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img className='spoon__img history__spoon' src={images.spoon} alt="spoon" />
        <p className='p__opensans'>Fusce dictum dolor sed consectetur placerat. Suspendisse ut laoreet lorem. Praesent et fermentum mauris. Morbi venenatis vehicula tellus, sit amet sagittis urna tristique non.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
