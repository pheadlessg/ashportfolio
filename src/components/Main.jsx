import React, { Component } from 'react';
import { Element } from 'react-scroll';
import '../css/App.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div>
          <Element className="abouttext" name="about">
            <h1 className="aboutheader">About Me</h1>
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
          <Element className="workstext" name="writing">
            <h1 className="worksheader">Things What I Have Written</h1>
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
            <h1 className="contactheader">Contact</h1>
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
        </div>
      </div>
    );
  }
}

export default Main;
