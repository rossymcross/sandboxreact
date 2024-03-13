import { FunctionComponent } from "react";
import styles from "./DataReceiver.module.css";

const DataReceiver: FunctionComponent = () => {
  return (
    <div className={styles.dataReceiver}>
      <div className={styles.promoContent}>
        <div className={styles.dataLinker}>
          <h1 className={styles.entertainmentForEveryone}>
            Entertainment for Everyone
          </h1>
          <div className={styles.downloadOurApp}>
            Download our app now and book your next visit!
          </div>
        </div>
        <div className={styles.dataStorage}>
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
        <img
          className={styles.decorativeHero2Icon}
          loading="lazy"
          alt=""
          src="/decorative-hero2.svg"
        />
      </div>
    </div>
  );
};

export default DataReceiver;
