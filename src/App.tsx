import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import "./server";
import VanDetail from "./pages/VanDetail";
import AppLayout from "./components/AppLayout";

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
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
