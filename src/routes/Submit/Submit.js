import React, { Component } from 'react';
// import logo from '../logo.svg';
// import styles from '../home/home.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
//import email from 'react-native-email';

class Submit extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount()
  {
    this.handleEmail();
  }
  handleEmail = () => {
    // const to = ['varinder.sadana@gmail.com'] // string or array of email addresses
    // email(to, {
    //     // Optional additional arguments
    //     cc: ['varinder.sadana@gmail.com'], // string or array of email addresses
    //     bcc: 'varinder.sadana@gmail.com', // string or array of email addresses
    //     subject: 'Show how to use',
    //     body: 'Some body right here'
    // }).catch(console.error)
}
  render() {
    return (
      <div>
        Submit
      </div>
    );
  }
}

export default Submit;
