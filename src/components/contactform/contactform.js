import React, { Component } from 'react';
import axios from 'axios';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './contactform.scss';

class ContactForm extends Component {
  constructor(props)
  {
    super(props);
    this.state={name:"",email:"",subject:"",message:"",thankyou:""}
  }
  submitinfo = () => {
    console.log('submitiing');

    axios.get(`/submit?date=${new Date()}&name=${this.state.name}&email=${this.state.email}&message=${this.state.message}&subject=${this.state.subject}`).then(
      res => {
        console.log(res);
      this.setState({thankyou:"Thank you for your Message. It has been sent"})
      },
      error => {
        console.log(error);
      },
    );
  };
  setval=(e,type)=>{
  //  alert(e.target.value)
    this.setState({[type]:e.target.value})
  }
  render() {
    return (
      <div className={s.contactform_cont}>
        <div className={s.contact_txt}>Contact Me</div>
        <form>
          <ul>
            <li className={`${s.name} ${s.mr10}`}>
              <input
                autocomplete="off"
                name="name"
                type="text"
                placeholder="Name"
                onChange={(e)=>{this.setval(e,'name')}}
              />
              <span className={s.awsome_input_border} />
            </li>
            <li className={`${s.email} ${s.ml10}`}>
              <input
                autocomplete="off"
                name="email"
                type="text"
                placeholder="Email"
                onChange={(e)=>{this.setval(e,'email')}}
              />{' '}
              <span class="awsome_input_border" />
            </li>
            <li className={s.subject}>
              <input
                autocomplete="off"
                name="subject"
                type="text"
                placeholder="Subject"
                onChange={(e)=>{this.setval(e,'subject')}}
              />{' '}
              <span className={s.awsome_input_border} />
            </li>
            <li className={s.message}>
              <textarea name="message" placeholder="Message" onChange={(e)=>{this.setval(e,'message')}} />
              <span class="awsome_input_border" />
            </li>
          </ul>

          <input
            type="button"
            className={s.btn_small}
            value="Submit"
            onClick={this.submitinfo}
          />
        </form>
      <div className={s.thankyou}>{this.state.thankyou}</div>
      </div>
    );
  }
}

export default withStyles(s)(ContactForm);
