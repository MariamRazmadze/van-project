import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Button, Tag, Image, Spin } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import type { Van } from "../../types/van";

const { Title, Paragraph, Text } = Typography;

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState<Van | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentVan(data.vans);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Spin size="large" />
      </div>
    );
  }

  if (!currentVan) {
    return (
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <Title level={3}>Van not found</Title>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
      <Link to=".." relative="path" className="no-underline">
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          style={{ marginBottom: 32 }}
        >
          Back to all vans
        </Button>
      </Link>

      <div className="flex flex-col gap-8">
        <Image
          src={currentVan.imageUrl}
          alt={currentVan.name}
          preview={false}
          style={{ width: "100%", height: 500, objectFit: "cover" }}
        />

        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between gap-4">
            <Title level={1} style={{ fontWeight: 300, margin: 0 }}>
              {currentVan.name}
            </Title>
            <Tag
              style={{
                textTransform: "uppercase",
                fontSize: "0.875rem",
                border: 0,
                background: "#f3f4f6",
                padding: "4px 16px",
              }}
            >
              {currentVan.type}
            </Tag>
          </div>

          <div>
            <Text style={{ fontSize: "2rem", fontWeight: 300 }}>
              ${currentVan.price}
            </Text>
            <Text type="secondary" style={{ fontSize: "1.25rem" }}>
              /day
            </Text>
          </div>

          <Paragraph style={{ fontSize: "1.125rem", color: "#6b7280" }}>
            {currentVan.description}
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
