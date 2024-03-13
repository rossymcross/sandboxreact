import { FunctionComponent } from "react";
import Benefit from "./Benefit";
import styles from "./VipSection.module.css";

const VipSection: FunctionComponent = () => {
  return (
    <section className={styles.vipSection}>
      <img className={styles.mainIcon} alt="" src="/main.svg" />
      <div className={styles.wrapperVipCardImage}>
        <img
          className={styles.vipCardImageIcon}
          loading="lazy"
          alt=""
          src="/vip-card-image@2x.png"
        />
      </div>
      <div className={styles.vipContent}>
        <div className={styles.vipHeading}>
          <h1 className={styles.unlockTheNext}>Unlock the next level!</h1>
          <div className={styles.enjoyExclusiveBenefitsContainer}>
            <p className={styles.enjoyExclusiveBenefits}>
              Enjoy exclusive benefits, discounts and rewards at Sandbox Social!
            </p>
            <p className={styles.youCanNow}>
              You can now become VIP using our mobile app
            </p>
          </div>
        </div>
        <div className={styles.vipBenefits}>
          <div className={styles.benefitColumn1}>
            <div className={styles.benefit1}>
              <div className={styles.sequenceNode}>
                <div className={styles.parallelNode}>
                  <img
                    className={styles.mergeNodeIcon}
                    alt=""
                    src="/vector-3.svg"
                  />
                  <b className={styles.hourAtHighlanders}>
                    1 hour at Highlanders Axe Throwing every visit
                  </b>
                </div>
                <div className={styles.eachDayYou}>
                  Each day you visit Sandbox Social, you can play at Highlanders
                  at no additional cost!
                </div>
              </div>
              <img
                className={styles.matrixNodeIcon}
                loading="lazy"
                alt=""
                src="/rectangle-546@2x.png"
              />
            </div>
          </div>
          <div className={styles.benefitColumn2}>
            <Benefit
              localActivity="/local-activity.svg"
              freeVenueFeeForEvents="Free Venue Fee for Events"
              vIPMembersDoNotHaveToPayE="VIP members do not have to pay entry fee to any events."
            />
            <div className={styles.benefit3}>
              <div className={styles.dictionaryNode}>
                <img
                  className={styles.tollIcon}
                  loading="lazy"
                  alt=""
                  src="/toll.svg"
                />
                <b className={styles.upTo20}>Up to $20 in game credits</b>
              </div>
              <div className={styles.everyTimeYou}>
                Every time you visit Sandbox Social as a VIP user, you will
                automatically receive free credits on your account to use on any
                game. It starts at $5 (per visit), but will increase by $1 after
                each visit up to $20!
              </div>
              <div className={styles.theseCreditsAre}>
                These credits are to be used during the specific visit, they
                will disappear at the end of the visit.
              </div>
            </div>
          </div>
          <div className={styles.benefitColumn3}>
            <div className={styles.benefit4}>
              <div className={styles.frameParent}>
                <div className={styles.moneyOffCsredParent}>
                  <img
                    className={styles.moneyOffCsredIcon}
                    loading="lazy"
                    alt=""
                    src="/money-off-csred.svg"
                  />
                  <b className={styles.noDepositsRequired}>
                    No deposits required
                  </b>
                </div>
                <div className={styles.preOrderAnyGame}>
                  Pre-order any game at Weathertop without needing to pay a
                  deposit.
                </div>
              </div>
              <img
                className={styles.benefit4Child}
                loading="lazy"
                alt=""
                src="/rectangle-546-1@2x.png"
              />
            </div>
            <Benefit
              localActivity="/local-offer.svg"
              freeVenueFeeForEvents="15% off in retail items"
              vIPMembersDoNotHaveToPayE="VIP users save 15% on all retail items."
              propGap="0px 12px"
            />
          </div>
        </div>
        <div className={styles.vipCost}>
          <div className={styles.startingAt}>Starting at</div>
          <b className={styles.month}>$15/month</b>
        </div>
      </div>
    </section>
  );
};

export default VipSection;
