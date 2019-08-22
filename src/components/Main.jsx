import React, { Component } from 'react';
import { Element } from 'react-scroll';
import '../css/App.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div>
          <Element className="abouttext" name="about">
            <div className="aboutheader">
              <span className="aboutheadertext">About Me</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
              amet volutpat consequat mauris nunc congue nisi vitae suscipit.
              Ultrices tincidunt arcu non sodales neque sodales ut. Odio aenean
              sed adipiscing diam donec adipiscing tristique. Sed vulputate mi
              sit amet mauris commodo quis imperdiet massa. At tempor commodo
              ullamcorper a lacus vestibulum sed arcu. Massa placerat duis
              ultricies lacus sed turpis tincidunt. Sit amet nisl purus in. Nisl
              tincidunt eget nullam non nisi est sit amet. Pretium nibh ipsum
              consequat nisl.
            </p>
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
