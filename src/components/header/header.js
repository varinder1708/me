import React, { Component } from 'react';
import s from '../header/header.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    console.log(this.props.config);
    return (
      <header>
        {/* <div className="bold_txt">Varinder test</div>
                <div className="lightbold_txt">FREELANCE  DEVELOPER</div> */}
        {/* <ul className={s.header}><li><a href="/">Home</a></li><li><a href="/contact">Contact</a></li></ul> */}
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            {/* <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div> */}
            <ul class="nav navbar-nav">
              <li class={this.props.config.pagename=="home"?"active":""}>
                <a href="/">Home</a>
              </li>
              <li class={this.props.config.pagename=="contact"?"active":""}>
                <a href="/contact">Contact</a>
              </li>
              {/* <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li> */}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default withStyles(s)(Header);
