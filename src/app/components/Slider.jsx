import React from 'react'
import {Carousel} from 'antd'
import '../sass/Slider.sass'

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images
    }
  }
  componentWillMount() {
    this.sliders = this.state.images.map((img, index) => {
      return (
        <div key={index}>
          <img src={require('../img/home/' + img.url)}/>
        </div>
      )
    });
  }

  render() {
    return (
      <div id="slider">
        <Carousel autoplay>
          {this.sliders}
        </Carousel>
      </div>
    )
  }
}

export default Slider