import React from 'react';
import { Element } from 'react-scroll';
import pic from '../img/pic1.jpeg';

const About = () => {
  return (
    <div>
      <Element className="abouttext" name="about">
        <div className="aboutheader">
          <span className="aboutheadertext">About Me</span>
        </div>
        <img className="picture" src={pic} alt="" />
        <div className="aboutbody">
          <h2>Hi. I'm Ash. I write stuff.</h2>
          <p>
            From a young age I dreamed of being a screenwriter. At the tender
            age of three I wrote my first four hour epic screenplay which was
            immediately turned into a hit movie directed by Val Kilmer and won
            twenty-eight academy awards.
            <br />
            <br />I moved from the mean streets of Manchester in 2019, leaving
            behind the world of cold rain and gritty, crime-infested streets
            that I was so used to. Now I live in Long Beach, California - the
            land of hot sun and gritty, crime-infested streets.
            <br />
            <br />
            I'd also like to add that my husband Sean is almost definitely the
            best thing ever.
            <br />
            <br />
            Also, gizza job. G'wan. Giz. What'cha doin'? Writin' a sitcom? I can
            do that, mate. Easy peasy. G'wan. Gizza job.
          </p>
        </div>
      </Element>
    </div>
  );
};

export default About;
