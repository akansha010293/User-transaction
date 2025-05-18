import Dashboard from "../../pages/Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Topbar />
        <div className="content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
