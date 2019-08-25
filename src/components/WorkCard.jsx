import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import pic from '../img/pic1.jpeg';

const WorkCard = props => {
  return (
    <div>
      <Card>
        {/* <CardImg top width="100%" src={pic} alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Download .pdf</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default WorkCard;
