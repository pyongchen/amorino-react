import React from 'react'
import '../sass/bottom.sass'

class Bottom extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  goTop() {
    $('body').animate({scrollTop: 0}, 800);
  }
  render() {
    let bottom = this.props.bottom;
    return (
      <div id="bottom">
        <div id="bottom-left">
          <img src={require('../img/frame/' + bottom.code)}/>
          <div id="info">
            <p>{bottom.name}</p>
            <p>电话: {bottom.phone}</p>
            <p>地址: {bottom.address}</p>
          </div>
        </div>
        <div id="bottom-right">
          <a onClick={this.goTop.bind(this)}>
            <img src={require('../img/frame/up.jpg')}/>
          </a>
          <p>{bottom.allRight}</p>
        </div>
      </div>
    )
  }
}

export default Bottom