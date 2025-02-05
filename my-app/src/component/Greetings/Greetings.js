import React from "react";

function Greetings(props) {
  if (!props.name) {
    return <h1>Hello World ! How are you doing ?</h1>;
  }

  return <h1>Hello , {props.name} ! How are you doing ?</h1>;
}

export default Greetings;
