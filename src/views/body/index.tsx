import React from 'react';
import "./index.css"
const range = new Array(13).fill(0);
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
      {range.map((_, i) =>
        <img src={`${BASE_IMG_URL}${i + 1}.jpg`} role="presentation" style={{ height: '100vh' }} />
      )}
    </div>
  );
}

export default Body;
