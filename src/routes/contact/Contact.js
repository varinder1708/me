import React, { Component } from 'react';
// import logo from '../logo.svg';
// import styles from '../home/home.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './home.scss';
import Header from '../../components/header/header';
import ContactForm from "../../components/contactform/contactform";
import Mapcomponent from "../../components/Mapcomponent/Mapcomponent";
class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header config={this.props.config}/>
        <div className={`${s.relpos} ${s.overhide} wrapper`}>
        <div className={s.leftpanel} ><ContactForm /></div>
       <div className={s.rightpanel}> <Mapcomponent /></div>
       </div>
      </div>
    );
  }
}

export default (withStyles(s)(Contact));
