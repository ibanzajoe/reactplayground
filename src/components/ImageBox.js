import React from 'react';
import './ImageBox.css'

class ImageBox extends React.Component {
  render() {
    return (
      <div className="imageBox">
        <img src={this.props.image} alt="default" />
      </div>
    )
  }
}

export default ImageBox