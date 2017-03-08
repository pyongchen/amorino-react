import React from 'react'
import {Carousel} from 'antd'
import '../sass/Slider.sass'

class Slider extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="slider">
        <Carousel autoplay>
          <div><img src={require('../img/home/slider1.png')}/></div>
          <div><img src={require('../img/home/slider2.png')}/></div>
          <div><img src={require('../img/home/slider3.png')}/></div>
        </Carousel>
      </div>
    )
  }
}

export default Slider