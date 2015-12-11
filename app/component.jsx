import React from 'react';
import "./t.js"
// import $ from 'jquery'
import './app.scss';
import {
  Router,
  Route,
  Link
} from 'react-router'

//app路由
export default class App extends React.Component {
  render () {
    return (
      <Router>
        <Route path="/" component={Main}/>
        <Route path="/MyCar" component={MyCar}/>
        <Route path="/Market" component={Market}/>
        <Route path="/Center" component={Center}/>
      </Router>
    )
  }
}


// 头部组件
class Header extends React.Component {
  render () {
    return (
      <div>
        <header className="header">
          header
        </header>
      </div>
    )
  }
}

//脚部组件
class Footer extends React.Component {
  render () {
    return (
      <div>
        <footer className="footer">
          <ul>
            <Link to="/" >
              <li className={this.props.tab=="1"?"icon icon-one":"icon icon-one2"}>
                <i></i>
                <p>车主服务</p>
              </li>
              </Link>
            <Link to="/MyCar">
              <li className={this.props.tab=="2"?"icon icon-two":"icon icon-two2"}>
                <i></i>
                <p>我的车</p>
              </li>
            </Link>

            <Link to="/Market">
              <li className={this.props.tab=="3"?"icon icon-three":"icon icon-three2"}>
                <i></i>
                <p>商城</p>
              </li>
            </Link>

            <Link to="/Center">
              <li className={this.props.tab=="4"?"icon icon-four":"icon icon-four2"}>
                <i></i>
                <p>个人中心</p>
              </li>
            </Link>
          </ul>
        </footer>
      </div>
    )
  }
}
class SliderBox extends React.Component{
  constructor() {
    super()
  }
  render(){
    return(
      <div className="sliderBox">SliderBox</div>
    )
  }
}
class IconList extends React.Component{
  render(){
    var iconData=[
      {"title":"查违章","href":"#","class":"cont-img"},
      {"title":"年审","href":"#","class":"cont-img"},
      {"title":"娱乐","href":"#","class":"cont-img"},
      {"title":"美食","href":"#","class":"cont-img"},
      {"title":"保险","href":"#","class":"cont-img"},
      {"title":"道路救援","href":"#","class":"cont-img"},
      {"title":"洗车","href":"#","class":"cont-img"},
      {"title":"更多","href":"#","class":"cont-img"}
    ];
    var iconItem= iconData.map(function(data,key){
      return(
        <a href={data.href} key={key}>
          <div className="up-content">
            <div className={data.class}></div>
            <div className="cont-name">{data.title}</div>
          </div>
        </a>
      )
    })
    return(
      <div className="iconBox">
        <div className="box-up">
          {iconItem}
        </div>
      </div>
    )
  }
}
// 主界面内容
class MainBody extends React.Component {
  render () {
    return (
      <div className="MainBody">
        <SliderBox/>
        <IconList/>
        <CarShop/>
      </div>
    )
  }
}
class CarShop extends React.Component {
  constructor() {
    super()
  }
  render(){
    var carData=[
      {"title":"胎压监测","content":"实时监测胎压"},
      {"title":"雨刷","content":"刮拭干净无噪"},
      {"title":"机油","content":"航行无忧环保"},
      {"title":"空气净化","content":"干净舒适享受"},
    ]
    var carItem=carData.map(function(value,key){
      return(
        <li key={key}>
          <p className="title">{value.title}</p>
          <p className="content">{value.content}</p>
          <img />
        </li>
      )
    })
    return(
      <div className="Market">
        <span>车品商城</span>
        <span className="allKinds">全部分类 ></span>
        <ul>
          {carItem}
        </ul>
      </div>
    )
  }

}
//主界面组件
class Main extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <MainBody/>
        <div style={{"height":"80px"}}/>
        <Footer tab="1"/>
      </div>
    )
  }
}
class MyCar extends React.Component {
  render () {
    return (
      <div>
        <Header/>
      <h1 style={{marginTop:"50px"}}>Mycar</h1>
        <Footer tab="2"/>
      </div>
    )
  }
}
// 快递查询
class Market extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <h1 style={{marginTop:"50px"}}>Market</h1>
        <Footer tab="3"/>
      </div>
    )
  }
}

class Center extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <h1 style={{marginTop:"50px"}}>Center</h1>
        <Footer tab="4"/>
      </div>
    )
  }
}
