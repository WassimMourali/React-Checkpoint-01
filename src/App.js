import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './style.css'; 
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = 'Wassim Mourali';

const App = () => {
  return (
    <Container className="container">
      <Card className="product-card">
        <Card.Body>
          <Card.Title>Produits Industriels</Card.Title>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <p className="message">
        Hello, {firstName}
      </p>
      {firstName && (
        <img
          src="https://gomycodelearn.blob.core.windows.net/profiles/4bfddd44-d290-4037-8f26-a4370be3f585-133537619460009088.jpg"
          alt="Profile"
          className="profile"
        />
      )}
    </Container>
  );
};

export default App;
