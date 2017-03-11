import React from 'react'
import ReactDOM from 'react-dom'
import '../sass/head.sass'
import 'antd/dist/antd.min.css'
import {Icon} from 'antd'
import $ from 'jquery'
import LoginDialog from '../components/LoginDialog'
import {Router, Route, IndexRoute, Redirect, browserHistory} from 'react-router';

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curLan: 'Ch',
      curPage: 'home'
    };
  }
  componentDidMount() {
    $('.loginBox').css('display', 'none');
    $(ReactDOM.findDOMNode(this.refs.Ch)).addClass('active');
    $('.nav-home').addClass('active');
  }
  changePage(key) {
    if(key == this.state.curPage) return;
    $('.nav-' + this.state.curPage).removeClass('active');
    $('.nav-' + key).addClass('active');
    this.setState({
      curPage: key
    })
  }
  translate(language) {
    console.log('切换语言:' + language);
    let curLan = this.state.curLan;
    if(language == this.state.curLan) return;
    $(ReactDOM.findDOMNode(this.refs[language])).addClass('active');
    $(ReactDOM.findDOMNode(this.refs[curLan])).removeClass('active');
    this.setState({
      curLan: language
    })
  }
  login() {
    $('.loginBox').fadeIn(600);

    // 添加滤镜
    $('#head,#home,#bottom').addClass('row')
  }
  render() {
    return (
      <div>
        <div id="head">
          <a href="#" id="title">Amorino</a>
          <div id="nav">
            <a className="nav-home" onClick={this.changePage.bind(this, 'home')}>首页</a>
            <a className="nav-product" onClick={this.changePage.bind(this, 'product')}>产品</a>
            <a className="nav-login" onClick={this.login.bind(this)}>登录</a>
            <a ref='En' onClick={this.translate.bind(this,'En')}>En</a>
            <a ref='Ch' onClick={this.translate.bind(this,'Ch')}> | 中</a>
            <a ref='Ee' onClick={this.translate.bind(this,'Ee')}> | Elespañol</a>
            <div id="search">
              <Icon type="search"/>
            </div>
          </div>
        </div>
        <LoginDialog/>
      </div>
    )
  }
}

export default Head