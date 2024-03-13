import { FunctionComponent } from "react";
import styles from "./MapSection.module.css";

const MapSection: FunctionComponent = () => {
  return (
    <section className={styles.mapSection}>
      <div className={styles.contactInfoWrapper}>
        <div className={styles.contactInfo}>
          <h1 className={styles.comeVisitUs}>Come Visit Us!</h1>
          <div className={styles.contactDescription}>
            <div className={styles.column1}>
              <div className={styles.locationInfo}>
                <b className={styles.location}>Location</b>
                <div className={styles.descendantNodes}>
                  <img
                    className={styles.locationOnIcon}
                    loading="lazy"
                    alt=""
                    src="/location-on.svg"
                  />
                  <div className={styles.uncleNodes}>
                    <div className={styles.hauteCityCenter}>
                      Haute City Center
                    </div>
                    <div className={styles.sUsHwy}>
                      3401 S US Hwy 41, Terre Haute, IN 47802, United States
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contactusInfo}>
                <b className={styles.contactUs}>Contact Us</b>
                <div className={styles.descendantOnceRemovedNodes}>
                  <img
                    className={styles.phoneIcon}
                    loading="lazy"
                    alt=""
                    src="/phone.svg"
                  />
                  <div className={styles.uncleOnceRemoved}>+1 812-898-8003</div>
                </div>
                <div className={styles.auntOnceRemovedNodes}>
                  <img
                    className={styles.mailIcon}
                    loading="lazy"
                    alt=""
                    src="/mail.svg"
                  />
                  <div className={styles.hisandboxsocialcom}>
                    hi@sandboxsocial.com
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.openinghoursInfo}>
                <b className={styles.openingHours}>Opening Hours</b>
                <div className={styles.auntTwiceRemovedNodes}>
                  <div className={styles.mon}>MON</div>
                  <div className={styles.amTo9pm}>- 10AM to 9PM</div>
                </div>
                <div className={styles.descendantThriceRemovedNode}>
                  <div className={styles.tue}>TUE</div>
                  <div className={styles.amTo9pm1}>- 10AM to 9PM</div>
                </div>
                <div className={styles.auntThriceRemovedNodes}>
                  <div className={styles.wed}>WED</div>
                  <div className={styles.amTo9pm2}>- 10AM to 9PM</div>
                </div>
                <div className={styles.descendantFourTimesRemoved}>
                  <div className={styles.thu}>THU</div>
                  <div className={styles.amTo9pm3}>- 10AM to 9PM</div>
                </div>
                <div className={styles.auntFourTimesRemovedNodes}>
                  <div className={styles.fri}>FRI</div>
                  <div className={styles.amTo9pm4}>- 10AM to 9PM</div>
                </div>
                <div className={styles.descendantFiveTimesRemoved}>
                  <div className={styles.sat}>SAT</div>
                  <div className={styles.amTo9pm5}>- 10AM to 9PM</div>
                </div>
                <div className={styles.auntFiveTimesRemovedNodes}>
                  <div className={styles.sun}>SUN</div>
                  <div className={styles.amTo9pm6}>- 10AM to 9PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sandboxPinWrapper}>
        <div className={styles.sandboxPin}>
          <div className={styles.uncleSixTimesRemovedNodes}>
            <img
              className={styles.sandboxLogoDarkMode}
              alt=""
              src="/sandbox-logo-dark-mode.svg"
            />
          </div>
          <img
            className={styles.locationOnIcon1}
            loading="lazy"
            alt=""
            src="/location-on-1.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
