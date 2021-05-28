import Common from "./Common";
import React from "react";
import web from "../src/images/skillimg.png";
import Cardskills from "./Cardskills";
import Skillsdata from "./Skilldata";

export default function Skills() {
  return (
    <>
      <Common
        name="Top Skills of"
        visit="./Education"
        imgsrc={web}
        parah="AWS, C++, ReactJS, Python"
        btname="View More"
      />
      <div className="my-5">
        <h1 className="text-center"> Skills and Projects </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto"></div>
          <div className="row gy-4">
            {Skillsdata.map((val, ind) => {
              return (
                <Cardskills
                  key={ind}
                  title={val.title}
                  project={val.project}
                  level={val.level}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
