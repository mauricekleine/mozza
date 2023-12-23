import Image from "next/image";

import styles from "./subthread-logo.module.scss";

export function SubthreadLogo() {
  return (
    <div className={styles.container}>
      <Image
        alt="Subthread"
        className={styles.front}
        height={256}
        src="/subthread.png"
        width={256}
      />

      <Image
        alt="Subthread"
        className={styles.back}
        height={256}
        src="/subthread.png"
        width={256}
      />
    </div>
  );
}
