import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Divider from './components/Divider';
import Coaches from './components/Coaches';
import Downloads from './components/Downloads';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Home />
      <About />
      <Divider />
      <Coaches />
      <Divider />
      <Schedule />
      <Divider />
      <Gallery />
      <Divider />
      <Testimonials />
      <Divider  />
      <Downloads />
    </div>
  );
}

export default App;