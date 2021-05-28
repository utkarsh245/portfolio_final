import "./styles.css";
import Sdata from "./Sdata";
import React from "react";
import Cardcert from "./Cardcert";
import web from "../src/images/cert.png";
import Common from "./Common";

export default function Certifications() {
  return (
    <>
      <Common
        name="Certifications of"
        visit="./Education"
        imgsrc={web}
        parah="AWS Certified Cloud Practitioner"
        btname="View Certifications"
      />
      <div className="my-5">
        <h1 className="text-center"> Certifications </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto"></div>
          <div className="row gy-4">
            {Sdata.map((val, ind) => {
              return (
                <Cardcert
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  link={val.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
