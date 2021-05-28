import "./styles.css";
import React from "react";

export default function Cardskills(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <div className="card border-success mb-3">
            <div className="card-header bg-transparent border-success">
              {props.title}
            </div>
            <div className="card-body text-success">
              <h5 className="card-title">{props.level}</h5>
              <p className="card-text">{props.project}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
