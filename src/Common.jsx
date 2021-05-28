import "./styles.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Common(props) {
  return (
    <>
      <section id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <br />
                    <strong className="my_name"> Utkarsh Tewari </strong>
                  </h1>
                  <h2 className="my-3"> {props.parah} </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-edn">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="my-pic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
