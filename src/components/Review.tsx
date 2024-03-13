import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Review.module.css";

export type ReviewType = {
  starRate?: string;
  theFoodAndDrinksWereADeli?: string;
  lindaM?: string;
  showStarsImage?: boolean;
  showStarRateIcon?: boolean;
  starRateIconVisible?: boolean;
  starRateIconVisible1?: boolean;
  starRateIconVisible2?: boolean;
  starRateIconVisible3?: boolean;
  showIcon?: boolean;

  /** Style props */
  review2MinHeight?: CSSProperties["minHeight"];
  starsImageWidth?: CSSProperties["width"];
  starsImageHeight?: CSSProperties["height"];
  starRateIconMinHeight?: CSSProperties["minHeight"];
  starRateIconMinHeight1?: CSSProperties["minHeight"];
  starRateIconMinHeight2?: CSSProperties["minHeight"];
  starRateIconMinHeight3?: CSSProperties["minHeight"];
  starRateIconMinHeight4?: CSSProperties["minHeight"];
};

const Review: FunctionComponent<ReviewType> = ({
  starRate,
  theFoodAndDrinksWereADeli,
  lindaM,
  showStarsImage,
  showStarRateIcon,
  starRateIconVisible,
  starRateIconVisible1,
  starRateIconVisible2,
  starRateIconVisible3,
  showIcon,
  review2MinHeight,
  starsImageWidth,
  starsImageHeight,
  starRateIconMinHeight,
  starRateIconMinHeight1,
  starRateIconMinHeight2,
  starRateIconMinHeight3,
  starRateIconMinHeight4,
}) => {
  const review2Style: CSSProperties = useMemo(() => {
    return {
      minHeight: review2MinHeight,
    };
  }, [review2MinHeight]);

  const starsImageStyle: CSSProperties = useMemo(() => {
    return {
      width: starsImageWidth,
      height: starsImageHeight,
    };
  }, [starsImageWidth, starsImageHeight]);

  const starRateIconStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: starRateIconMinHeight,
    };
  }, [starRateIconMinHeight]);

  const starRateIcon1Style: CSSProperties = useMemo(() => {
    return {
      minHeight: starRateIconMinHeight1,
    };
  }, [starRateIconMinHeight1]);

  const starRateIcon2Style: CSSProperties = useMemo(() => {
    return {
      minHeight: starRateIconMinHeight2,
    };
  }, [starRateIconMinHeight2]);

  const starRateIcon3Style: CSSProperties = useMemo(() => {
    return {
      minHeight: starRateIconMinHeight3,
    };
  }, [starRateIconMinHeight3]);

  const starRateIcon4Style: CSSProperties = useMemo(() => {
    return {
      minHeight: starRateIconMinHeight4,
    };
  }, [starRateIconMinHeight4]);

  return (
    <div className={styles.review2} style={review2Style}>
      {showStarsImage && (
        <div className={styles.starsImage} style={starsImageStyle}>
          {showStarRateIcon && (
            <img
              className={styles.starRateIcon}
              alt=""
              src="/star-rate.svg"
              style={starRateIconStyle}
            />
          )}
          {starRateIconVisible && (
            <img
              className={styles.starRateIcon1}
              alt=""
              src="/star-rate.svg"
              style={starRateIcon1Style}
            />
          )}
          {starRateIconVisible1 && (
            <img
              className={styles.starRateIcon2}
              alt=""
              src="/star-rate.svg"
              style={starRateIcon2Style}
            />
          )}
          {starRateIconVisible2 && (
            <img
              className={styles.starRateIcon3}
              alt=""
              src="/star-rate.svg"
              style={starRateIcon3Style}
            />
          )}
          {starRateIconVisible3 && (
            <img
              className={styles.starRateIcon4}
              alt=""
              src={starRate}
              style={starRateIcon4Style}
            />
          )}
        </div>
      )}
      <div className={styles.reviewContent}>
        <div className={styles.theFoodAnd}>{theFoodAndDrinksWereADeli}</div>
        <b className={styles.lindaM}>{lindaM}</b>
      </div>
      <img className={styles.icon} loading="lazy" alt="" src="/.svg" />
      {showIcon && <img className={styles.icon1} alt="" src="/.svg" />}
    </div>
  );
};

export default Review;
