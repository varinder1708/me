import React, { Component } from "react";
import ReactDOM from "react-dom";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './aboutme.scss';
import $ from "jquery";

class Aboutme extends Component {
  constructor(props) {
    super(props);
    this.state={
      "animationclass":"hidden"
    }
  }
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this.refs.toggle);
    const em = ReactDOM.findDOMNode(this.refs.text);
    $(el).slideDown();

  


  // text expand animation
     setTimeout(()=>{ this.setState({animationclass:"show"}) },2000);
  
  
  
  
  }
  render() {
    return (
      <div className={s.aboutme}>
        {/* <h1>Front-end Web Developer.</h1> */}

        <p ref="toggle" className={s.toggle}>
          
            <div  className={s.mb14}> HI,</div>
            <ul className={`${s.text} ${this.state.animationclass=="hidden"?s.hidden:""}`} ref="text">
              <li>I</li>
              <li className={s.spaced}>A</li>
              <li className={s.ghost}>m</li>
              <li className={s.spaced}>V</li>
              <li className={s.ghost}>a</li>
              <li className={s.ghost}>r</li>
              <li className={s.ghost}>i</li>
              <li className={s.ghost}>,</li>
              <li className={s.spaced}>a</li>
              <li className={s.spaced}>F</li>
              <li className={s.ghost}>r</li>
              <li className={s.ghost}>e</li>
              <li className={s.ghost}>e</li>
              <li className={s.ghost}>l</li>
              <li className={s.ghost}>a</li>
              <li className={s.ghost}>n</li>
              <li className={s.ghost}>c</li>
              <li className={s.ghost}>e</li>

              <li className={s.spaced}>D</li>
              <li className={s.ghost}>e</li>
              <li className={s.ghost}>v</li>
              <li className={s.ghost}>e</li>
              <li className={s.ghost}>l</li>
              <li className={s.ghost}>o</li>
              <li className={s.ghost}>p</li>
              <li className={s.ghost}>e</li>
              <li className={s.ghost}>r</li>
            </ul>
            <div>What I do</div>
          <div>CSS3, Javascript, ES6, React, HTML, Nodejs, Wordpress </div>
        </p>
        <p className={s.buttons_cont}>
          
          <a href="/contact" className={`${s.button_link} ${s.red}  ${s.mp} ${s.mr10}`}>
         Send Message
          </a>
          {/* <a class="button_link grey ml10" href="#}>
            bbbbbbbb
          </a> */}
        </p>
      </div>
    );
  }
}

export default (withStyles(s)(Aboutme));;
