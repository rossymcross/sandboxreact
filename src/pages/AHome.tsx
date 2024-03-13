import { FunctionComponent } from "react";
import OutputHandler from "../components/OutputHandler";
import DataReceiver from "../components/DataReceiver";
import PubAndGrubSection from "../components/PubAndGrubSection";
import AdventureCardsSection from "../components/AdventureCardsSection";
import VipSection from "../components/VipSection";
import ReviewSection from "../components/ReviewSection";
import AppSection from "../components/AppSection";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import styles from "./AHome.module.css";

const AHome: FunctionComponent = () => {
  return (
    <div className={styles.aHome1920}>
      <section className={styles.heroSection}>
        <OutputHandler />
        <img
          className={styles.decorativeHero1Icon}
          loading="lazy"
          alt=""
          src="/decorative-hero1.svg"
        />
        <DataReceiver />
      </section>
      <PubAndGrubSection />
      <section className={styles.adventureSection}>
        <div className={styles.leafNode}>
          <h1 className={styles.chooseYourOwn}>Choose your own adventure</h1>
        </div>
        <div className={styles.cuttingEdgeGaming40}>
          Cutting-edge gaming, 40+ pinball machines, and real axe-throwing with
          a digital twist. Unforgettable fun for all awaits!
        </div>
        <div className={styles.dataAggregator}>
          <img
            className={styles.adventureSectionBackgroundimIcon}
            alt=""
            src="/adventure-section-backgroundimage@2x.png"
          />
          <img
            className={styles.arrowDownwardIcon}
            loading="lazy"
            alt=""
            src="/arrow-downward.svg"
          />
        </div>
      </section>
      <AdventureCardsSection />
      <VipSection />
      <ReviewSection />
      <AppSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default AHome;
