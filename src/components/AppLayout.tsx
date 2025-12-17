import { Layout } from "antd";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

export default function AppLayout() {
  return (
    <Layout className="min-h-screen">
      <Header />
      <Content style={{ background: "white" }}>
        <Outlet />
      </Content>
    </Layout>
  );
}
