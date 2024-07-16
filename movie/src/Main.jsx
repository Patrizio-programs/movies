import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Main = () => {
  // Dummy data
  const items = [
    { id: 1, imgSrc: 'https://via.placeholder.com/150', title: 'Planet of Apes', url: 'https://filemoon.sx/e/vs16fchgoxxf' },
    { id: 2, imgSrc: 'https://via.placeholder.com/150', title: 'TimeCrimes', url: 'https://filemoon.sx/e/7b09lwkpjf2o' },
    { id: 3, imgSrc: 'https://via.placeholder.com/150', title: 'I am Legend', url: 'https://filemoon.sx/e/5ebbnkmrpczz' },
    { id: 4, imgSrc: 'https://via.placeholder.com/150', title: 'The Watchers', url: 'https://filemoon.sx/e/x25wzreteyfz' },
    { id: 5, imgSrc: 'https://via.placeholder.com/150', title: 'Inside Man', url: '###' },


    // Add more items as needed
  ];

  return (
    <Container>
      <Row>
        {items.map(item => (
          <Col key={item.id} sm={12} md={6} lg={4}>
            <Card onClick={() => window.location.href = item.url} style={{cursor: 'pointer'}}>
              <Card.Img variant="top" src={item.imgSrc} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Main
