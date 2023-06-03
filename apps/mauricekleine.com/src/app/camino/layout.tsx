import Image from "next/image";

import image from "./jon-tyson-cnMuC1Il06Y-unsplash.jpg";
import styles from "./layout.module.css";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles["camino-container"]}>
        <Image
          alt="Camino de Santiago"
          className={styles["camino-image"]}
          fill
          placeholder="blur"
          priority
          src={image}
        />
      </div>

      {children}
    </>
  );
}
