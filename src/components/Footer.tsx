import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

export default function Footer() {
  return (
    <AntFooter
      style={{
        background: "#f9fafb",
        borderTop: "1px solid #e5e7eb",
        textAlign: "center",
        padding: "24px 0",
      }}
    >
      <div className="text-gray-600">&#169; 2025 #VANLIFE</div>
    </AntFooter>
  );
}
