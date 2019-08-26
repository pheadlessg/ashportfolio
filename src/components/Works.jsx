import React from 'react';
import { Element } from 'react-scroll';
import kip2 from '../documents/the-town-that-kip-built-episode-2.pdf';
import kip1 from '../documents/the-town-that-kip-built-pilot.pdf';
import fleabag from '../documents/Fleabag Spec.pdf';

const Works = () => {
  return (
    <div>
      <Element className="workstext" name="writing">
        <div className="worksheader">
          <span className="worksheadertext">Works</span>
          <span></span>
        </div>
        <hr />
        <span className="workCard">
          <h3 className="workTitle">The House That Kip Built</h3>
          <p className="workSubtitle">A Drama in Six Parts</p>
          <p className="workDesc">
            'The town of Wellstone was like any other until ALAN `KIP` SKIPPER
            and his followers moved in. The `Youngies` have strange habits and
            even stranger beliefs. The locals are dismayed to find a cult in
            their midst. Thirty years later and Wellstone has changed beyond
            recognition. The sleepy village is now a bustling town and the
            Youngies are here to stay. With Kip having departed this realm, his
            son-in-law, MARK ARNOLD, is at the helm while Kip’s followers await
            his return. Whilst Kip was an iron fist in a velvet glove, Mark is a
            brutal disciplinarian who uses fear and intimidation to keep the
            believers in line and retain his position. But not everyone in
            Wellstone is willing to accept the status quo. Can Mark hang on to
            his crown in the face of rising discontent? DAPHNE and LEE are
            journalists who come to the town to investigate claims of
            brainwashing and abuse. Posing as dedicated followers, they start by
            befriending their new neighbours. They’ll discover that everyone has
            a different reason for coming to Wellstone. We will discover how a
            religion, founded as a protest against the consumerism of the
            eighties, became big business: powered by greed and corruption.
          </p>
          <a href={kip1}>Download Episode 1 PDF</a>
          <br></br>
          <a href={kip2}>Download Episode 2 PDF</a>
        </span>
        <hr></hr>
        <span className="workCard">
          <h3 className="workTitle">Fleabag Spec Script</h3>
          <p className="workSubtitle">Season 3 Episode 1</p>
          <p className="workDesc">
            A spec script for Season 3 of Pheobe Waller-Bridge's Fleabag.
          </p>
          <a href={fleabag}>Download PDF</a>
        </span>
        <hr />
      </Element>
    </div>
  );
};

export default Works;
