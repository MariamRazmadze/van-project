import { useOutletContext } from "react-router-dom";
import { Typography } from "antd";
import type { Van } from "../../types/van";

const { Text } = Typography;

export default function HostVanPricing() {
  const { currentVan }: { currentVan: Van } = useOutletContext();
  return (
    <section style={{ marginTop: 24 }}>
      <Text style={{ fontSize: "2.5rem", fontWeight: 500 }}>
        ${currentVan.price}
      </Text>
      <Text type="secondary" style={{ fontSize: "1.5rem" }}>
        /day
      </Text>
    </section>
  );
}
