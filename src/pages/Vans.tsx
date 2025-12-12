import React from "react";
import { Spin, Card, Row, Col, Typography, Tag } from "antd";
import type { Van } from "../types/van";

const { Title, Text } = Typography;

export default function Vans() {
  const [vans, setVans] = React.useState<Van[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 400,
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <Title level={1} style={{ fontWeight: 300, marginBottom: 64 }}>
        Explore our vans
      </Title>

      <Row gutter={[48, 48]}>
        {vans.map((van) => (
          <Col xs={24} md={12} lg={8} key={van.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={van.name}
                  src={van.imageUrl}
                  style={{ height: 256, objectFit: "cover" }}
                />
              }
              style={{ boxShadow: "none" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                  }}
                >
                  <Title level={4} style={{ margin: 0, fontWeight: 500 }}>
                    {van.name}
                  </Title>
                  <Tag
                    style={{
                      textTransform: "uppercase",
                      fontSize: "0.75rem",
                      border: 0,
                      background: "#f3f4f6",
                    }}
                  >
                    {van.type}
                  </Tag>
                </div>
                <div>
                  <Text style={{ fontSize: "1.5rem", fontWeight: 300 }}>
                    ${van.price}
                  </Text>
                  <Text type="secondary" style={{ fontSize: "1rem" }}>
                    /day
                  </Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
