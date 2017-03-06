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
        <Carousel>
          <div><img src={require('../img/slider1.png')}/></div>
          <div><img src={require('../img/slider2.png')}/></div>
          <div><img src={require('../img/slider3.png')}/></div>
        </Carousel>
      </div>
    )
  }
}

export default Slider