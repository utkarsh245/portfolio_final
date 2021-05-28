import Common from "./Common";
import React from "react";
import web from "../src/images/techd.png";

export default function About() {
  return (
    <>
      <Common
        name="Hi! I am"
        visit="./Education"
        imgsrc={web}
        parah="I am a young, active person passionate about Cloud computing, Front end development and ready to learn new technologies. Know more about me here!"
        btname="Educational Background"
      />
    </>
  );
}
