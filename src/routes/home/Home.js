import React, { Component } from 'react';
// import logo from '../logo.svg';
// import styles from '../home/home.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

import Header from '../../components/header/header';
import Aboutme from '../../components/aboutme/aboutme';
import Footer from '../../components/footer/footer';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        
        <Header config={this.props.config} />
        <Aboutme />
        <div></div>
        <Footer />
      </div>
    );
  }
}

export default (withStyles(s)(Home));
