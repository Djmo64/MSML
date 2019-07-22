import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import image1 from '../Images/IamLegend.jpg';
import image2 from '../Images/AtlantaSky.jpg';
import image3 from '../Images/good-beers-and-good-food.jpg';
import { Container, Row, Col } from 'reactstrap';

//This Code is for json API
// let array = ["wood", "lake", "sun", "moon", "sea"];

//         let images = array.map(image => {
//            return <img key={image} src={require(`./icons/${image}.png`)} alt="" className="img-responsive" />
//         });

const CardContent = (props) => {
  return (
    <div className="cardDiv" >
      <Col className="cardCol">
        <Card>
          <Container className="img-container">
            <CardImg top width="100%" src={image2} alt="Card image cap" />
          </Container>
          <CardBody>
            <CardTitle>Where Should I Go?</CardTitle>
            <CardSubtitle className="text">Your sign tells a lot about places you should check out!</CardSubtitle>
            <CardText className="text">Click the button to find places near and far you would enjoy.</CardText>
            <Button className= "cardBtn">Find</Button>
          </CardBody>
        </Card>
      </Col>

      <Col className="cardCol">
        <Card>
          <Container className="img-container">
            <CardImg top width="100%" src={image3} alt="Card image cap" />
          </Container>
          <CardBody>
            <CardTitle>What should I Eat?</CardTitle>
            <CardSubtitle className="text">There are many cuisines you might enjoy based on you sign!</CardSubtitle>
            <CardText className="text">Click the button below to find your perfect resturant visit or great new recipes.</CardText>
            <Button className="cardBtn">Find</Button>
          </CardBody>
        </Card>
      </Col>

      <Col className="cardCol">
        <Card>
          <Container className="img-container">
            <CardImg top width="100%" src={image1} alt="Card image cap" />
          </Container>
          <CardBody>
            <CardTitle>What Should I watch?</CardTitle>
            <CardSubtitle className="text">Find the best shows and movies to check out, catered to your sign!</CardSubtitle>
            <CardText className="text">Click the button below to find movies you might be intersted in or shows to binge on.</CardText>
            <Button className= "cardBtn">Find</Button>
          </CardBody>
        </Card>
      </Col>


    </div>
  );

}
export default CardContent;