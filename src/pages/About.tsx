import bgImg from "../assets/images/about.jpg";
import { Link } from "react-router-dom";
import { Typography, Button, Image, Divider, Space } from "antd";

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <div>
      <Image
        src={bgImg}
        alt="About Van Life"
        preview={false}
        style={{ width: "100%", height: 400, objectFit: "cover" }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
        <Title level={1} style={{ fontWeight: 300, marginBottom: 32 }}>
          Don't squeeze in a sedan when you could relax in a van.
        </Title>

        <Space size="large" style={{ marginBottom: 64, display: "flex" }}>
          <Paragraph style={{ fontSize: "1.125rem", color: "#6b7280" }}>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </Paragraph>
          <Paragraph style={{ fontSize: "1.125rem", color: "#6b7280" }}>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </Paragraph>
        </Space>

        <Divider />

        <div style={{ paddingTop: 24 }}>
          <Title level={2} style={{ fontWeight: 300, marginBottom: 24 }}>
            Your destination is waiting.
            <br />
            Your van is ready.
          </Title>
          <Link to="/vans">
            <Button type="primary" size="large">
              Explore Vans
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
