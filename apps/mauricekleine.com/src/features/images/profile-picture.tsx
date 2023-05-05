import Image from "next/image";

import styles from "./profile-picture.module.scss";

export function ProfilePicture() {
  return (
    <div className={styles.container}>
      <Image
        alt="Maurice Kleine"
        className={styles.back}
        height={256}
        src="/maurice-kleine.jpeg"
        width={256}
      />

      <Image
        alt="Maurice Kleine"
        className={styles.front}
        height={256}
        src="/maurice-kleine.jpeg"
        width={256}
      />
    </div>
  );
}
