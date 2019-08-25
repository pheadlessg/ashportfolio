import React from 'react';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <div>
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
  );
};

export default Contact;
