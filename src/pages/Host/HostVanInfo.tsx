import { useOutletContext } from "react-router-dom";
import { Typography, Tag } from "antd";
import type { Van } from "../../types/van";

const { Text, Paragraph } = Typography;

export default function HostVanInfo() {
  const { currentVan }: { currentVan: Van } = useOutletContext();
  return (
    <section style={{ marginTop: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <Text strong style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            Name
          </Text>
          <Paragraph style={{ fontSize: "1rem", marginTop: 4, marginBottom: 0 }}>
            {currentVan.name}
          </Paragraph>
        </div>

        <div>
          <Text strong style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            Category
          </Text>
          <div style={{ marginTop: 4 }}>
            <Tag
              style={{
                textTransform: "capitalize",
                fontSize: "0.875rem",
                border: 0,
                background: "#f3f4f6",
                padding: "4px 12px",
              }}
            >
              {currentVan.type}
            </Tag>
          </div>
        </div>

        <div>
          <Text strong style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            Description
          </Text>
          <Paragraph style={{ fontSize: "1rem", marginTop: 4, marginBottom: 0 }}>
            {currentVan.description}
          </Paragraph>
        </div>

        <div>
          <Text strong style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            Visibility
          </Text>
          <Paragraph style={{ fontSize: "1rem", marginTop: 4, marginBottom: 0 }}>
            Public
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
