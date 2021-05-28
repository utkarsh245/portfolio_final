import "./styles.css";
import React from "react";
import Common from "./Common";
import web from "../src/images/edulogo.png";

export default function Education() {
  return (
    <>
      <Common
        name="Educational background of"
        visit="./Education"
        imgsrc={web}
        parah="B.E. in Electronics & Computer Engineering"
        btname="View More"
      />
      <div className="my-5">
        <h1 className="text-center">Education</h1>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto"></div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Institution Name</th>
                <th scope="col">Degree</th>
                <th scope="col">Percentage/CGPA</th>
              </tr>
            </thead>
            <br />
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Thapar Institute Of Engineering and Technology, Patiala</td>
                <td>B.E. Elecronics and Computer Engineering</td>
                <td>8.9 CGPA, upto 5th sem</td>
              </tr>
              <br />
              <tr>
                <th scope="row">2</th>
                <td>Lal Bahadur Shastri Sr. Sec. School, New Delhi</td>
                <td>Senior Secondary (12th)</td>
                <td>86.6%</td>
              </tr>
              <br />
              <tr>
                <th scope="row">3</th>
                <td>City Montessori School, Lucknow</td>
                <td>Secondary (10th)</td>
                <td>92.2%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
