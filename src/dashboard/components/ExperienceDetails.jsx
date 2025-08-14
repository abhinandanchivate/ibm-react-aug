import React from "react";
import ExpRow from "./ExpRow";

const ExperienceDetails = ({ exps, deleteExperience }) => {
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
          {exps?.map((exp, index) => (
            <ExpRow key={index} row={exp} deleteExperience={deleteExperience} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExperienceDetails;
