import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout, Tabs } from "antd";

const { Header: AntHeader } = Layout;

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveKey = () => {
    if (location.pathname.startsWith("/host")) return "host";
    if (location.pathname.startsWith("/about")) return "about";
    if (location.pathname.startsWith("/vans")) return "vans";
    return "";
  };

  return (
    <AntHeader
      style={{
        background: "white",
        borderBottom: "1px solid #e5e7eb",
        padding: 0,
        height: 64,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-full">
        <Link
          to="/"
          className="text-black font-bold text-xl tracking-wide no-underline hover:opacity-60 transition-opacity"
        >
          VANLIFE
        </Link>
        <Tabs
          activeKey={getActiveKey()}
          onChange={(key) => navigate(`/${key}`)}
          items={[
            {
              key: "host",
              label: "Host",
            },
            {
              key: "about",
              label: "About",
            },
            {
              key: "vans",
              label: "Vans",
            },
          ]}
          style={{ marginBottom: 0 }}
        />
      </div>
    </AntHeader>
  );
}
