import React, { Component } from 'react';
// import logo from '../logo.svg';
// import styles from '../home/home.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './home.scss';

class Submitinfo extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  clicked = () => {
    alert('clicked');
  };
  render() {
    return (
      <div>
        <div onClick={this.clicked}>Submitinfo </div>
      </div>
    );
  }
}

export default withStyles(s)(Submitinfo);
