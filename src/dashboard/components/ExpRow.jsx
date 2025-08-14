import React from "react";

const ExpRow = ({ row, deleteExperience }) => {
  return (
    <>
      <>
        <tr>
          <td>{row.company}</td>
          <td class="hide-sm">{row.title}</td>
          <td class="hide-sm">
            {row.from} - {row.to}
          </td>
          <td>
            <button
              class="btn btn-danger"
              onClick={() => deleteExperience(row._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    </>
  );
};

export default ExpRow;
