import "./styles.css";
import React from "react";

export default function Cardcert(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href={props.link} className="btn">
              View Certification
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
