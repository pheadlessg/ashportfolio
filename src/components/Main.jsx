import React, { Component } from 'react';
import { Element } from 'react-scroll';
import '../css/App.css';
import pic from '../img/pic1.jpeg';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div>
          <Element className="abouttext" name="about">
            <div className="aboutheader">
              <span className="aboutheadertext">About Me</span>
            </div>
            <img className="picture" src={pic} />
            <div className="aboutbody">
              <h2>Hi. I'm Ash. I write stuff.</h2>
              <p>
                From a young age I dreamed of being a screenwriter. At the
                tender age of three I wrote my first four hour epic screenplay
                which was immediately turned into a hit movie directed by Val
                Kilmer and won twenty-eight academy awards.
                <br />
                <br />I moved from the mean streets of Manchester in 2019,
                leaving behind the world of cold rain and gritty, crime-infested
                streets that I was so used to. Now I live in Long Beach,
                California - the land of hot sun and gritty, crime-infested
                streets.
                <br />
                <br />
                I'd also like to add that my husband Sean is almost definitely
                the best thing ever.
                <br />
                <br />
                Also, gizza job. G'wan. Giz. What'cha doin'? Writin' a sitcom? I
                can do that, mate. Easy peasy. G'wan. Gizza job.
              </p>
            </div>
          </Element>
          <Element className="workstext" name="writing">
            <div className="worksheader">
              <span className="worksheadertext">Works</span>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            volutpat consequat mauris nunc congue nisi vitae suscipit. Ultrices
            tincidunt arcu non sodales neque sodales ut. Odio aenean sed
            adipiscing diam donec adipiscing tristique. Sed vulputate mi sit
            amet mauris commodo quis imperdiet massa. At tempor commodo
            ullamcorper a lacus vestibulum sed arcu. Massa placerat duis
            ultricies lacus sed turpis tincidunt. Sit amet nisl purus in. Nisl
            tincidunt eget nullam non nisi est sit amet. Pretium nibh ipsum
            consequat nisl.
          </Element>
          <Element className="contacttext" name="contact">
            <div className="contactheader">
              <span className="contactheadertext">Contact</span>
            </div>
            <div className="contactcontainer">
              <div>
                <a className="contactinfo" href="tel:424-397-4555">
                  (424)397-4555
                </a>
              </div>
              <div>
                <a className="contactinfo" href="mailto:ashduffy@gmail.com">
                  ashduffy@gmail.com
                </a>
              </div>
            </div>
          </Element>
        </div>
      </div>
    );
  }
}

export default Main;
