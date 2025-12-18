import { Layout } from "antd";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const { Content } = Layout;

export default function AppLayout() {
  return (
    <Layout style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Content style={{ background: "white", flex: 1 }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}
