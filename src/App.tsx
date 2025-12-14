import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Layout, Menu, ConfigProvider } from "antd";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import "./server";
import VanDetail from "./pages/VanDetail";

const { Header, Content } = Layout;

function AppContent() {
  const location = useLocation();

  const selectedKey =
    location.pathname === "/about"
      ? "about"
      : location.pathname === "/vans"
      ? "vans"
      : "";

  return (
    <Layout className="min-h-screen">
      <Header
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
      </Header>
      <Content style={{ background: "white" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </Content>
    </Layout>
  );
}

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000000",
          borderRadius: 0,
          fontFamily: "Inter, sans-serif",
        },
        components: {
          Button: {
            primaryShadow: "none",
          },
          Card: {
            borderRadiusLG: 0,
          },
        },
      }}
    >
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
