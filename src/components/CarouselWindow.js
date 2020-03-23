import React from 'react';
import ImageStrip from './ImageStrip'
import './CarouselWindow.css'

class CarouselWindow extends React.Component {  
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      width: '',
      currentSlide: 0,
      slideDistance: ''
    }
  }
  componentDidMount() {
    const { current } = this.myRef
    console.log('this is it: ', current)
    this.setState({width: current.offsetWidth})
    this.slide = this.slide.bind(this)
  }
  slide(direction) {
    if (direction === 'right') {
      this.setState((state) => ({
        currentSlide: state.currentSlide + 1,
        slideDistance: (state.currentSlide + 1) * state.width
      }))
    } else {
      this.setState((state) => ({
        currentSlide: state.currentSlide - 1,
        slideDistance: (state.currentSlide - 1) * state.width
      }))
    }
  }
  render() {
    return (
      <div ref={this.myRef} className="carouselWindow">
        <ImageStrip images={this.props.images} slideDistance={this.state.slideDistance} />
        <div className="carouselWindowControlsOverlay">
          <div className="carouselWindowControls">
            <svg onClick={() => this.slide('right')} viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
            </svg>
            <svg onClick={() => this.slide('left')} viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}



export default CarouselWindow