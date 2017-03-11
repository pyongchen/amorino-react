import React from 'react'
import data from '../const/login'
import '../sass/loginDialog.sass'

class LoginDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lan: 'Zh'
    }
  }
  componentDidMount() {

  }
  close() {
    $('.loginBox').fadeOut(600);

    // 删除滤镜
    $('#head,#home,#bottom').removeClass('row');
  }
  render() {
    let lan = this.state.lan;
    return <div className="loginBox">
      <div className="left">
        <p className="title">{data[lan].title}</p>
        <p className="message">{data[lan].message}</p>
        <div className="colorBox"></div>
        <div className="btnGroup">
          <input className="username" type="text" placeholder={data[lan].username}/> <br/>
          <input className="password" type="text" placeholder={data[lan].password}/>
          <button className="submit">
            <span className="text">{data[lan].login}</span>
            <span className="icon">→</span>
          </button>
        </div>
      </div>
      <div className="right">
        <div className="icon" onClick={this.close.bind(this)}>ⓧ</div>
        <div className="content">
          <img src={require('../img/frame/code.jpg')}/>
        </div>
      </div>
    </div>
  }
}

export default LoginDialog