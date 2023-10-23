import { DashboardWidgets } from "./components/dashboard-widgets";
import { RecentMessages } from "./components/recent-messages";

const AdminDashboard = () => {
  return (
    <>
      <DashboardWidgets />

      <RecentMessages />
    </>
  );
};

export default AdminDashboard;
