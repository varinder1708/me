import React, { Component } from "react";
import axios from 'axios';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './contactform.scss';

class ContactForm extends Component {
  submitinfo=()=>{

console.log("submitiing");

axios.get(`/submit?name=tony`)
.then(res => {
 console.log(res)
},
(error) => { console.log(error) })
  }
  render() {
    return (
      <div className={s.contactform_cont}>
        <div className={s.contact_txt}>Contact Me</div>
        <form><ul>
          <li className={`${s.name} ${s.mr10}`}><input
            autocomplete="off"
            name="name"
            type="text"
            placeholder="Name"
          />
          <span className={s.awsome_input_border}/>
          </li>
          <li className={`${s.email} ${s.ml10}`}>
          <input
            autocomplete="off"
            
            name="email"
            type="text"
            placeholder="Email"
          /> <span class="awsome_input_border"/>
          </li>
          <li   className={s.subject}>
          <input
            autocomplete="off"
          
            name="subject"
            type="text"
            placeholder="Subject"
          /> <span className={s.awsome_input_border}/>
          </li>
          <li className={s.message}>
          <textarea name="message"  placeholder="Message" />
          <span class="awsome_input_border"/>
          </li>
          </ul>
         
          <input type="button" className={s.btn_small} value="Submit" onClick={this.submitinfo} />
        </form>
      </div>
    );
  }
}


export default (withStyles(s)(ContactForm));

