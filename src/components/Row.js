import "./table.css";

function Row({ rowNum }) {
  return (
    <tr className="row">
      <td>{rowNum}</td>
      <td>{rowNum}</td>
      <td>{rowNum}</td>
    </tr>
  );
}

export default Row;
