import React from "react";
import { Link } from "react-router-dom";
import { Spin, Card, Row, Col, Typography } from "antd";
import type { Van } from "../../types/van";

const { Title, Text } = Typography;

export default function HostVans() {
  const [vans, setVans] = React.useState<Van[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <Title level={1} style={{ fontWeight: 300, marginBottom: 64 }}>
        Your listed vans
      </Title>

      <Row gutter={[48, 48]}>
        {vans.map((van) => (
          <Col xs={24} sm={12} lg={8} key={van.id}>
            <Link to={van.id} className="no-underline">
              <Card
                hoverable
                cover={
                  <img
                    alt={van.name}
                    src={van.imageUrl}
                    className="h-64 object-cover"
                  />
                }
                style={{ boxShadow: "none" }}
              >
                <div className="flex flex-col gap-2">
                  <Title level={4} style={{ margin: 0, fontWeight: 500 }}>
                    {van.name}
                  </Title>
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
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
