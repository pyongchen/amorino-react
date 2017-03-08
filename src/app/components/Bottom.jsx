import React from 'react'
import '../sass/bottom.sass'

class Bottom extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  goTop(text) {
    console.log('回到顶部' + text)
  }
  render() {
    return (
      <div id="bottom">
        <div id="bottom-left">
          <img src={require('../img/frame/' + this.props.code)}/>
          <div id="info">
            <p>微信号: Amorin</p>
            <p>电话: 020-86676139</p>
            <p>地址: 广州市越秀区</p>
          </div>
        </div>
        <div id="bottom-right">
          <a href="#" onClick={this.goTop.bind(this, '123')}>
            <img src={require('../img/frame/up.jpg')}/>
          </a>
          <p>Copyright @ 1998-2016 Amorino. All Right Reserved.</p>
        </div>
      </div>
    )
  }
}

export default Bottom