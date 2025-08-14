import React from "react";
import EduRow from "./EduRow";

const EducationDetails = ({edus}) => {
  return (
    <>
      <h2 class="my-2">Education Credentials</h2>
      <table class="table">
        <thead>
          <tr>
            <th>School</th>
            <th class="hide-sm">Degree</th>
            <th class="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {edus?.map((edu, index) => (
            <EduRow id={index} row={edu} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EducationDetails;
