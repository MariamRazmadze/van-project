import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Tabs } from "antd";

export default function HostLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveKey = () => {
    if (location.pathname.includes("/income")) return "income";
    if (location.pathname.includes("/reviews")) return "reviews";
    if (location.pathname.includes("/vans")) return "vans";
    return "dashboard";
  };

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
          <Tabs
            activeKey={getActiveKey()}
            onChange={(key) => {
              if (key === "dashboard") {
                navigate("/host");
              } else {
                navigate(key);
              }
            }}
            items={[
              {
                key: "dashboard",
                label: "Dashboard",
              },
              {
                key: "income",
                label: "Income",
              },
              {
                key: "vans",
                label: "Vans",
              },
              {
                key: "reviews",
                label: "Reviews",
              },
            ]}
            style={{ marginBottom: 0 }}
          />
        </div>
      </nav>
      <Outlet />
    </>
  );
}
