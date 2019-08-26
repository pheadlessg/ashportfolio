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
          <h2>Hi. I'm Ash. I write things.</h2>
          <br />
          <p>
            Originally from Manchester, UK I moved to Los Angeles in 2019 to
            pursue my lifelong dream of working in the entertainment industry.
          </p>
          <p>
            Since I was a kid, I loved writing stories. When I was ten I began
            writing gritty, kitchen-sink narratives for schoolwork - stories
            about children sent to work in mines perishing in a gruesome
            fashion. I remember my mother sitting me down to watch the classics
            'Whatever Happened to Baby Jane?' and 'Rebecca' when I was a girl
            and marvelling at the dark comedy that lurked behind the main
            threads of the story. I wanted to write - to create dramas that
            would grab viewers attention, bring them into worlds they hadn't
            seen and let them experience amazing things.
          </p>
          <p>
            In 2012 I finally decided to follow my passion and dedicated myself
            to an MA in Television and Radio Scriptwriting at the University of
            Salford.
          </p>
          <p>
            After some persistence and a lot of luck, I managed to contact one
            of my most-admired TV scriptwriters, Debbie Horsfield (Cutting It,
            Poldark) who agreed to mentor me throughout the course. You can read
            my final project - the first two episodes of a six-part drama about
            an enigmatic cult leader who gains control of a small town in the
            North of England - in the Works section of this site, along with
            other selections of my writing.
          </p>
          <p>
            If you like my writing, have any questions or just want to get in
            touch - please do so using the contact details on this site.
          </p>
        </div>
      </Element>
    </div>
  );
};

export default About;
