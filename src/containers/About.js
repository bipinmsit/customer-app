import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";

var hideUnhide = (isShow) => {
  if (isShow) {
    return <label>I am here!!</label>;
  }
};

function About() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("Mounting");

    return () => {
      console.log("Unmounting");
    };
  });
  return (
    <div>
      <Menu />
      <h2>About</h2>
      <button onClick={() => setShow((prev) => !prev)}>Hide / Show</button>
      {hideUnhide(show)}
    </div>
  );
}
export default About;
