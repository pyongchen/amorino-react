import React from 'react'
import Slider from '../components/Slider'
import Bottom from '../components/Bottom'
import axios from 'axios'
import api from '../api/api.index'
import '../sass/home.sass'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      bottom: '',
      middle: ''
    }
  }
  componentWillMount() {
    axios.get(api.slider).then((res) => {
      this.setState({
        images: this.state.images.concat(res.data.data)
      });
    });
    axios.get(api.bottom, {
      params: {
        lang: 'Zh'
      }
    }).then((res) => {
      this.setState({
        bottom: res.data.data[0]
      })
    });
    axios.get(api.middle).then((res) => {
      console.log(res.data.data);
      this.setState({
        middle: res.data.data
      })
    })
  }
  render() {
    let middle1 = this.state.middle[0],
        middle2 = this.state.middle[1],
        images = this.state.images,
        bottom = this.state.bottom;
    return <div>
      {images.length != 0 ? <Slider images={images}/> : null}
      {this.state.middle ?
        <div id="content">
          <div id="left">
            <img src={require('../img/home/' + middle1.image)}/>
            <div id="text">
              <p className="title">{middle1.title}</p>
              <p className="text">{middle1.text1}</p>
              <p className="text text2">{middle1.text2}</p>
              <div className="colorBox"></div>
            </div>
          </div>
          <div id="right">
            <img src={require('../img/home/' + middle2.image)}/>
            <div id="text">
              <p className="title">{middle2.title}</p>
              <p className="text">{middle2.text1}</p>
              <p className="text text2">{middle2.text2}</p>
              <div className="colorBox"></div>
            </div>
          </div>
        </div>: null
      }
      { bottom? <Bottom bottom={this.state.bottom}/> : null}
    </div>
  }
}

export default Home