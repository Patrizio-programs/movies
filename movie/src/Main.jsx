import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Main = () => {
  // Dummy data
  const items = [
    { id: 1, imgSrc: 'https://via.placeholder.com/150', title: 'Planet of Apes', url: 'https://streamtape.com/e/QdqBj0BJP3s03Rv/Kingdom.Of.The.Planet.Of.The.Apes.2024.1080p.WEBRip.x264.AAC5.1-%5BYTS.MX%5D.mp4' },
    { id: 2, imgSrc: 'https://via.placeholder.com/150', title: 'TimeCrimes', url: 'https://streamtape.com/e/8PyzgGa1q2hoqkG/Timecrimes.2007.1080p.BluRay.x264.AAC5.1-%5BYTS.MX%5D.mp4' },
    { id: 3, imgSrc: 'https://via.placeholder.com/150', title: 'Item 3', url: '#' },
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
