import { FunctionComponent } from "react";
import styles from "./AppSection.module.css";

const AppSection: FunctionComponent = () => {
  return (
    <section className={styles.appSection}>
      <div className={styles.appHeading}>
        <div className={styles.appHeader}>
          <h1 className={styles.tapIntoFun}>Tap into Fun!</h1>
          <div className={styles.downloadOurMobile}>
            Download our mobile app now for instant access to reservations,
            exclusive offers, and a seamless gaming experience. Dive into the
            adventure today – the excitement awaits in your pocket!"
          </div>
        </div>
        <div className={styles.storeButtons}>
          <img
            className={styles.appStoreIcon}
            loading="lazy"
            alt=""
            src="/app-store.svg"
          />
          <img
            className={styles.googlePlayIcon}
            loading="lazy"
            alt=""
            src="/google-play.svg"
          />
        </div>
      </div>
      <img
        className={styles.appImageIcon}
        loading="lazy"
        alt=""
        src="/app-image@2x.png"
      />
    </section>
  );
};

export default AppSection;
