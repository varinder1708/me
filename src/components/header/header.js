import React, { Component } from 'react';
import s from '../header/header.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Header extends Component {
    render() {
        return (
            <header>
                {/* <div className="bold_txt">Varinder</div>
                <div className="lightbold_txt">FREELANCE  DEVELOPER</div> */}
<ul className={s.header}><li><a href="/">Home</a></li><li><a href="/contact">Contact</a></li></ul>
            </header>
        );
    }
}
export default withStyles(s)(Header);
