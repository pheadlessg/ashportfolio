import React from 'react';
import { Element } from 'react-scroll';
import WorkCard from './WorkCard';

const Works = () => {
  return (
    <div>
      <Element className="workstext" name="writing">
        <div className="worksheader">
          <span className="worksheadertext">Works</span>
        </div>
        <WorkCard
          data={{
            title: 'title',
            subtitle: 'subtitle',
            description: 'description',
            image: 'image'
          }}
        />
      </Element>
    </div>
  );
};

export default Works;
