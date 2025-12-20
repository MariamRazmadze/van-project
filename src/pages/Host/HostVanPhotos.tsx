import { useOutletContext } from "react-router-dom";
import { Image } from "antd";
import type { Van } from "../../types/van";

export default function HostVanPhotos() {
  const { currentVan }: { currentVan: Van } = useOutletContext();
  return (
    <section style={{ marginTop: 24 }}>
      <Image
        src={currentVan.imageUrl}
        alt={currentVan.name}
        style={{
          width: "100%",
          maxWidth: 500,
          height: "auto",
          objectFit: "cover",
        }}
      />
    </section>
  );
}
