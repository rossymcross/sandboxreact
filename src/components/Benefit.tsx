import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Benefit.module.css";

export type BenefitType = {
  localActivity?: string;
  freeVenueFeeForEvents?: string;
  vIPMembersDoNotHaveToPayE?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
};

const Benefit: FunctionComponent<BenefitType> = ({
  localActivity,
  freeVenueFeeForEvents,
  vIPMembersDoNotHaveToPayE,
  propGap,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={styles.benefit2}>
      <div className={styles.localActivityParent} style={frameDivStyle}>
        <img
          className={styles.localActivityIcon}
          loading="lazy"
          alt=""
          src={localActivity}
        />
        <b className={styles.freeVenueFee}>{freeVenueFeeForEvents}</b>
      </div>
      <div className={styles.vipMembersDo}>{vIPMembersDoNotHaveToPayE}</div>
    </div>
  );
};

export default Benefit;
