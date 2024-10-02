import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => (
  <section id='home'>
    <div className="hero-section" style={{ backgroundImage: "url('../image/bg_4.jpg')", 
        height: "100vh",
        width: "100%", 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "#fff", 
        textAlign: "center" }}>
      <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100%" }}>
        <div className="hero-text bg-dark p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "10px" }}>
          <h1>Vítejte na stránkách Choki Kobudo Ryu</h1>
          <p>Domov tradičních bojových umění v Ústí nad Labem</p>
        </div>
      </Container>
    </div>
  </section>

);


export default Home;