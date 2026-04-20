import React from 'react';
import Header from './components/header';
import Slider from './components/slider';
import Work from './components/work';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;