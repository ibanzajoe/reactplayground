import React from 'react';
import logo from './logo.svg';
import './App.css';

import CarouselWindow from './components/CarouselWindow'
import ImageStrip from './components/ImageStrip'


import Dog from './components/white-dog.jpg'
import Dog2 from './components/beagle.jpeg'
import Dog3 from './components/brown-black-dog.jpg'
import Cat from './components/cat-2.jpg'
import Cat2 from './components/cat-3.jpg'
import Cat3 from './components/generic-cat.jpeg'

const images = [Dog, Dog2, Dog3, Cat, Cat2, Cat3]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>Add your new component below</p>
        
        <div className="theImage">
          <CarouselWindow images={images} />
        </div>
        
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
