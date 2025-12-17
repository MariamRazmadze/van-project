import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header: AntHeader } = Layout;

export default function Header() {
  const location = useLocation();

  const selectedKey =
    location.pathname === "/host"
      ? "host"
      : location.pathname === "/about"
      ? "about"
      : location.pathname === "/vans"
      ? "vans"
      : "";

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
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          style={{ border: 0, background: "transparent", minWidth: 200 }}
          items={[
            {
              key: "host",
              label: <Link to="/host">Host</Link>,
            },
            {
              key: "about",
              label: <Link to="/about">About</Link>,
            },
            {
              key: "vans",
              label: <Link to="/vans">Vans</Link>,
            },
          ]}
        />
      </div>
    </AntHeader>
  );
}
