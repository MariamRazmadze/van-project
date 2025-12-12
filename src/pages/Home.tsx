import { Link } from "react-router-dom";
import { Typography, Button, Row, Col, Image } from "antd";
import homeHero from "../assets/images/home.jpg";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <Row gutter={[48, 48]} align="middle">
        <Col xs={24} lg={12}>
          <Title level={1} style={{ fontWeight: 300, fontSize: "3rem", marginBottom: 24 }}>
            You got the travel plans, we got the travel vans.
          </Title>
          <Paragraph style={{ fontSize: "1.125rem", color: "#6b7280", marginBottom: 40 }}>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </Paragraph>
          <Link to="vans">
            <Button type="primary" size="large">
              Explore Vans
            </Button>
          </Link>
        </Col>
        <Col xs={0} lg={12}>
          <Image
            src={homeHero}
            alt="Van Life"
            preview={false}
            style={{ width: "100%", height: 500, objectFit: "cover" }}
          />
        </Col>
      </Row>
    </div>
  );
}
