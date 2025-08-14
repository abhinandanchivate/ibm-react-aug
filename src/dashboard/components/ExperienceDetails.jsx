import React from "react";
import ExpRow from "./ExpRow";

const ExperienceDetails = ({exps}) => {
  return (
    <>
      <h2 class="my-2">Experience Credentials</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Company</th>
            <th class="hide-sm">Title</th>
            <th class="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {exps?.map((exp,index)=>(<ExpRow id={index} row={exp}/>))}
        </tbody>
      </table>
    </>
  );
};

export default ExperienceDetails;
