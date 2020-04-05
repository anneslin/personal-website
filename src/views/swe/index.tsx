import React from 'react';
import "./index.css";
import { careerContent, uptopContent, clarkContent, domioContent, techIconFiles, techTitles } from "./constants";

const BASE_IMG_URL = 'http://anneslin.com/assets/imgs/logos/';

const Swe = ({ uptop = false, clark = false, domio = false }: { uptop?: boolean, clark?: boolean, domio?: boolean }) => {
  const content: careerContent | null = uptop
  ? uptopContent
  : clark 
    ? clarkContent
    : domio
      ? domioContent
      : null;
  return content && (
    <div className='introContent'>
      <div className='title'>
        <div className='title1'>
          <a href={content.companyUrl} target="_blank">
            <img src={`${BASE_IMG_URL}${content.companyLogo}`} role="presentation" title={content.companyName} /></a>
        </div>
        <div className='sub-title'>
          {content.title}
        </div>
      </div>
      <div className="scrollableContent">
        <div className='blurb'>
          <div className="icn">
            {content.techs.map(x =>
              <img className="icns" src={`${BASE_IMG_URL}${techIconFiles[x]}`} role="presentation" title={techTitles[x]} />
            )}
            <br />
            <br />
          </div>
          <br />
          {content.description}
        </div>
      </div>
    </div>
  );
}

export default Swe;
