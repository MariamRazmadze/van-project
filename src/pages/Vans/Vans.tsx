import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Spin, Card, Row, Col, Typography, Tag, Button } from "antd";
import type { Van } from "../../types/van";

const { Title, Text } = Typography;

export default function Vans() {
  const [vans, setVans] = useState<Van[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
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
      <div className="flex justify-center items-center min-h-[400px]">
        <Spin size="large" />
      </div>
    );
  }

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <Title level={1} style={{ fontWeight: 300, marginBottom: 64 }}>
        Explore our vans
      </Title>

      <div className="flex gap-3 mb-12">
        <Button
          type={typeFilter === "simple" ? "primary" : "default"}
          size="large"
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </Button>
        <Button
          type={typeFilter === "luxury" ? "primary" : "default"}
          size="large"
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </Button>
        <Button
          type={typeFilter === "rugged" ? "primary" : "default"}
          size="large"
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </Button>
        {typeFilter && (
          <Button type="text" size="large" onClick={() => setSearchParams({})}>
            Clear filters
          </Button>
        )}
      </div>

      <Row gutter={[48, 48]}>
        {displayedVans.map((van) => (
          <Col xs={24} md={12} lg={8} key={van.id}>
            <Link
              to={van.id}
              className="no-underline"
              state={{
                search: `?${searchParams.toString()}`,
                type: typeFilter,
              }}
            >
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
                  <div className="flex items-start justify-between">
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
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
