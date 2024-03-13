import { FunctionComponent } from "react";
import AdventureCard from "./AdventureCard";
import styles from "./AdventureCardsSection.module.css";

const AdventureCardsSection: FunctionComponent = () => {
  return (
    <section className={styles.adventureCardsSection}>
      <AdventureCard
        image23="/image-23@2x.png"
        cuttingEdgeGamingWithCons="Cutting-edge gaming with consoles, PCs, and tabletops for 20 years. Thrilling gameplay and unforgettable experiences for gamers of all ages."
        label="Explore eBash"
      />
      <div className={styles.adventureCard}>
        <div className={styles.cardDescription}>
          <img
            className={styles.adventureLogoIcon}
            loading="lazy"
            alt=""
            src="/adventure-logo@2x.png"
          />
          <div className={styles.midwestsPremierDestination}>
            Midwest's premier destination with over 40 pinball machines.
            Unforgettable fun for all type of gamers, and nostalgia seekers
            alike.
          </div>
          <div className={styles.button}>
            <div className={styles.button1}>
              <div className={styles.labelButtons}>
                <img className={styles.iconleft} alt="" src="/iconleft1.svg" />
                <div className={styles.buttonLabel}>
                  <b className={styles.label}>Explore Bank of Pinball</b>
                </div>
                <img
                  className={styles.iconright}
                  alt=""
                  src="/iconright2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.adventureCard1}>
        <div className={styles.cardDescription1}>
          <div className={styles.adventureLogoParent}>
            <img
              className={styles.adventureLogoIcon1}
              loading="lazy"
              alt=""
              src="/adventure-logo-1@2x.png"
            />
            <div className={styles.realAxeThrowingMeets}>
              Real axe-throwing meets digital innovation. Instant feedback and
              interactive game modes enhance the thrill.
            </div>
          </div>
          <div className={styles.button2}>
            <div className={styles.button3}>
              <div className={styles.labelButtons1}>
                <img className={styles.iconleft1} alt="" src="/iconleft1.svg" />
                <div className={styles.buttonLabel1}>
                  <b className={styles.label1}>Explore Highlanders</b>
                </div>
                <img
                  className={styles.iconright1}
                  alt=""
                  src="/iconright2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdventureCard
        image23="207x36x-884304285"
        cuttingEdgeGamingWithCons="Midwest's premier destination with over 40 pinball machines. Unforgettable fun for all type of gamers, and nostalgia seekers alike."
        label="Explore Weathertop"
        propBackgroundImage="url('/adventure-card3@3x.png')"
        propWidth="207px"
        propHeight="36px"
      />
      <div className={styles.adventureCard2}>
        <div className={styles.cardDescription2}>
          <div className={styles.adventureLogoGroup}>
            <div className={styles.adventureLogo}>
              <div className={styles.wrapperImage24}>
                <img
                  className={styles.image24Icon}
                  loading="lazy"
                  alt=""
                  src="/image-24@2x.png"
                />
              </div>
            </div>
            <div className={styles.scoringIsCompletely}>
              Scoring is completely automated and challenge-driven, following
              players from hole to hole!
            </div>
          </div>
          <div className={styles.button4}>
            <div className={styles.button5}>
              <div className={styles.labelButtons2}>
                <img className={styles.iconleft2} alt="" src="/iconleft1.svg" />
                <div className={styles.buttonLabel2}>
                  <b className={styles.label2}>Explore Lucky Putt</b>
                </div>
                <img
                  className={styles.iconright2}
                  alt=""
                  src="/iconright2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.adventureCard3}>
        <div className={styles.cardDescription3}>
          <div className={styles.adventureLogoContainer}>
            <div className={styles.adventureLogo1}>
              <img
                className={styles.adventureLogoChild}
                loading="lazy"
                alt=""
                src="/frame-1000003839.svg"
              />
            </div>
            <div className={styles.scoringIsCompletely1}>
              Scoring is completely automated and challenge-driven, following
              players from hole to hole!
            </div>
          </div>
          <div className={styles.button6}>
            <div className={styles.button7}>
              <div className={styles.labelButtons3}>
                <img className={styles.iconleft3} alt="" src="/iconleft1.svg" />
                <div className={styles.buttonLabel3}>
                  <b className={styles.label3}>Explore Lucky Putt</b>
                </div>
                <img
                  className={styles.iconright3}
                  alt=""
                  src="/iconright2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventureCardsSection;
