import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import image1 from '../Images/IamLegend.jpg';
import image2 from '../Images/AtlantaSky.jpg';
import image3 from '../Images/good-beers-and-good-food.jpg';

    const CardContent = (props) => {
      return (
        <div >
          <Card>
            <CardImg top width="100%"  src={image3} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>hey</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          
          
        </div>
      );
       
    }
      export default CardContent;