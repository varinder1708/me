import React, { Component } from 'react';
import logo from '../logo.svg';
import styles from '../home/home.css';
import Header from '../header/header';
import Aboutme from '../aboutme/aboutme';
import Footer from '../footer/footer';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        
        <Header />
        <Aboutme />
        <div></div>
        <Footer />
      </div>
    );
  }
}

export default Home;
