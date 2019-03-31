import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  changeme(e){

    alert(e.target.value)
  }
  render() {

    return (
      <div>
<input type="text" onChange={this.changeme}/>
      </div>
    );
  }
}

export default Toggle;
