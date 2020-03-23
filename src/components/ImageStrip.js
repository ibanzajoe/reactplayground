import React from 'react';
import ImageBox from './ImageBox'
import './ImageStrip.css'

class ImageStrip extends React.Component {
  render() {
    console.log('this is the slide distance: ', this.props.slideDistance)
    return (
      <div className="imageStrip" style={{transform: `translateX(${this.props.slideDistance}px)`}}>
        {this.props.images.map((image, index) => 
          <ImageBox key={index} image={image} />
        )}

      </div>
    )
  }
}



export default ImageStrip