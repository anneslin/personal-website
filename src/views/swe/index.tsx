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
    <div className='careerContainer'>
      <div className="careerSpacer" />
      <div className='titleContainer'>
        <div className='title'>
          <a href={content.companyUrl} target="_blank">
            <img src={`${BASE_IMG_URL}${content.companyLogo}`} role="presentation" title={content.companyName} /></a>
        </div>
        <div className='sub-title'>
          {content.title}
        </div>
      </div>
      <div>
        {content.techs.map(x =>
          <img className="icn" src={`${BASE_IMG_URL}${techIconFiles[x]}`} role="presentation" title={techTitles[x]} />
        )}
      </div>
      {content.description}
    </div>
  );
}

export default Swe;
