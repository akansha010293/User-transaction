export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Example Company</div>
      <nav className="nav">
        <div className="nav-item active">Dashboard</div>
        <div className="nav-item">Transaction</div>
      </nav>
      <div className="logout">Logout</div>
    </div>
  );
}
