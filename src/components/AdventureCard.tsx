import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AdventureCard.module.css";

export type AdventureCardType = {
  image23?: string;
  cuttingEdgeGamingWithCons?: string;
  label?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const AdventureCard: FunctionComponent<AdventureCardType> = ({
  image23,
  cuttingEdgeGamingWithCons,
  label,
  propBackgroundImage,
  propWidth,
  propHeight,
}) => {
  const adventureCardStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const adventureLogoStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const image23IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.adventureCard} style={adventureCardStyle}>
      <div className={styles.cardDescription}>
        <div className={styles.adventureLogo} style={adventureLogoStyle}>
          <img
            className={styles.image23Icon}
            loading="lazy"
            alt=""
            src={image23}
            style={image23IconStyle}
          />
        </div>
        <div className={styles.cuttingEdgeGamingWith}>
          {cuttingEdgeGamingWithCons}
        </div>
        <div className={styles.button}>
          <div className={styles.button1}>
            <div className={styles.labelButtons}>
              <img className={styles.iconleft} alt="" src="/iconleft.svg" />
              <div className={styles.buttonLabel}>
                <b className={styles.label}>{label}</b>
              </div>
              <img className={styles.iconright} alt="" src="/iconright.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;
