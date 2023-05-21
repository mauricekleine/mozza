import Image from "next/image";

import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Image
        alt="Camino de Santiago"
        className={styles["camino-image"]}
        fill
        src="/jon-tyson-cnMuC1Il06Y-unsplash.jpg"
      />

      {children}
    </>
  );
}
