import React from 'react';
import "./index.css"
import img from './../../assets/imgs/body/1.jpg';
import img2 from './../../assets/imgs/body/2.jpg';
import img3 from './../../assets/imgs/body/3.jpg';
import img4 from './../../assets/imgs/body/4.jpg';
import img5 from './../../assets/imgs/body/5.jpg';
const range = new Array(13);
const BASE_IMG_URL = 'http://anneslin.com/assets/imgs/body/';
const Body = () => {

  return (
    <div className='introContentPhoto'>
        <div className="spacer" />
        <div className='textContainer'>
          <div className='titlePhoto'>
            The Body
          </div>
          <div className='blurb'>
            unsigned model
            <br/>
            <a href="mailto:anne.lin@berkeley.edu">email</a> for rates
          </div>
      </div>
      <img src={img} role="presentation" style={{ height: '100vh' }} />
      <img src={img2} role="presentation" style={{ height: '100vh' }} />
      <img src={img3} role="presentation" style={{ height: '100vh' }} />
      <img src={img4} role="presentation" style={{ height: '100vh' }} />
      <img src={img5} role="presentation" style={{ height: '100vh' }} />
      {range.map((_, i) => <img src={`${BASE_IMG_URL}${i}.jpg`} role="presentation" style={{ height: '100vh' }} />)}
    </div>
  );
}

export default Body;
