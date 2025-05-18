const dummyData = Array(5).fill({
  date: "01/05/0225",
  reference: "3636314645",
  description: "Lorem ipsum dolor sit amet, consectetur",
  gst: "$1,500.00",
  total: "$15,000.00",
});

export default function DashboardTable() {
  return (
    <div className="table-wrapper">
      <div className="table-header">
        <input type="text" placeholder="🔍 Search" className="search" />
        <button className="create-btn">Create New Transaction</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Reference</th>
            <th>Description</th>
            <th>GST</th>
            <th>Amount Inc. GST</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((row, idx) => (
            <tr key={idx}>
              <td>{row.date}</td>
              <td>{row.reference}</td>
              <td>{row.description}</td>
              <td>{row.gst}</td>
              <td>{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>Showing 5 out of 5 Records</span>
        <span>
          Rows per Page{" "}
          <select>
            <option>25</option>
          </select>
        </span>
        <span>← Page 1 of 1 →</span>
      </div>
    </div>
  );
}
