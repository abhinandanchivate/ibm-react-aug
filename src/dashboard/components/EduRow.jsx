import React from "react";

const EduRow = ({row}) => {
  return (
    <>
      <tr>
        <td>{row.school}</td>
        <td class="hide-sm">{row.degree}</td>
        <td class="hide-sm">
          {row.from} - {row.to}
        </td>
        <td>
          <button class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default EduRow;
