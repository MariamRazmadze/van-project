import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu } from "antd";

export default function HostLayout() {
  const location = useLocation();

  const selectedKey = location.pathname.includes("/income")
    ? "income"
    : location.pathname.includes("/reviews")
    ? "reviews"
    : "dashboard";

  return (
    <>
      <nav
        style={{
          background: "white",
          borderBottom: "1px solid #e5e7eb",
          padding: "16px 0",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]}
            style={{ border: 0, background: "transparent" }}
            items={[
              {
                key: "dashboard",
                label: <Link to="/host">Dashboard</Link>,
              },
              {
                key: "income",
                label: <Link to="/host/income">Income</Link>,
              },
              {
                key: "reviews",
                label: <Link to="/host/reviews">Reviews</Link>,
              },
            ]}
          />
        </div>
      </nav>
      <Outlet />
    </>
  );
}
