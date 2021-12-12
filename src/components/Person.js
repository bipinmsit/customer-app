import React from "react";
export class PersonClass extends React.Component {
  doLogin = () => {
    alert(">> class do Login");
  }
  // generating html 
  render(){
    return(
    <div>
    <h5>Class Person Name {this.props.name}</h5>
    <h5>Person Email {this.props.email}</h5>
    <input type="button" value="Login" onClick={this.doLogin} />
  </div>
    )
  }
}

export  function PersonFunc({name,school}) {
    var doLogin = () => {
        alert(">> function do Login");
    }
    //camelCase
  return (
    <div>
      <h5>Person Name {name}</h5>
      <h5>Person Email {school}</h5>
      <input type="button" value="Login" onClick={doLogin} />
    </div>
  );
}
