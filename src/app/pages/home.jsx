import React from 'react'
import Slider from '../components/Slider'
import Bottom from '../components/Bottom'
import '../sass/home.sass'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottom: {
        code: 'code.jpg'
      },
      content: {
        left: {
          img: 'slider3.png',
          title: 'Amorino',
          text1: '以科学的精度',
          text2: '衡量优雅'
        },
        right: {
          img: 'slider2.png',
          title: 'Amorino',
          text1: '凭独具致匠心',
          text2: '成就典范'
        },
      }
    }
  }
  render() {
    let content = this.state.content;
    return <div>
      <Slider/>
      <div id="content">
        <div id="left">
          <img src={require('../img/home/' + content.left.img)}/>
          <div id="text">
            <p>{content.left.title}</p>
            <p>{content.left.text1}</p>
            <p>{content.left.text2}</p>
            <div className="colorBox"></div>
          </div>
        </div>
        <div id="right">
          <img src={require('../img/home/' + content.right.img)}/>
          <div id="text">
            <p>{content.right.title}</p>
            <p>{content.right.text1}</p>
            <p>{content.right.text2}</p>
            <div className="colorBox"></div>
          </div>
        </div>
      </div>
      <Bottom code={this.state.bottom.code}/>
    </div>
  }
}

export default Home