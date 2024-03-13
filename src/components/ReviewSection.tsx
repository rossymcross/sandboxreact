import { FunctionComponent } from "react";
import Review from "./Review";
import styles from "./ReviewSection.module.css";

const ReviewSection: FunctionComponent = () => {
  return (
    <section className={styles.reviewSection}>
      <div className={styles.reviewHeading}>
        <div className={styles.forestNode}>
          <h1 className={styles.highScoresFrom}>
            High Scores from Our Visitors!
          </h1>
          <div className={styles.readyToJoin}>
            Ready to join the fun but want to hear from the pros first? Check
            out these rave reviews from fellow adventurers, gaming enthusiasts,
            and fun-seekers.
          </div>
        </div>
      </div>
      <div className={styles.reviewSlider}>
        <Review
          starRate="/star-rate.svg"
          theFoodAndDrinksWereADeli="A gamer's paradise! The pinball collection blew my mind, and the axe-throwing was an unexpected thrill. Can't wait to go back!"
          lindaM="Samantha T."
          showStarsImage={false}
          showStarRateIcon={false}
          starRateIconVisible={false}
          starRateIconVisible1={false}
          starRateIconVisible2={false}
          starRateIconVisible3={false}
          showIcon={false}
          review2MinHeight="228px"
          starsImageWidth="120px"
          starsImageHeight="24px"
          starRateIconMinHeight="unset"
          starRateIconMinHeight1="unset"
          starRateIconMinHeight2="unset"
          starRateIconMinHeight3="unset"
          starRateIconMinHeight4="unset"
        />
        <Review
          starRate="/star-rate.svg"
          theFoodAndDrinksWereADeli="The food and drinks were a delightful surprise. Great atmosphere to relax after some competitive gaming. Highly recommended!"
          lindaM="Linda M."
          showStarsImage
          showStarRateIcon
          starRateIconVisible
          starRateIconVisible1
          starRateIconVisible2
          starRateIconVisible3
          showIcon
        />
        <Review
          starRate="/star-rate.svg"
          theFoodAndDrinksWereADeli="A unique experience unlike any other. The digital twist on axe-throwing was innovative and exciting. A must-visit spot for entertainment enthusiasts."
          lindaM="Brian H."
          showStarsImage
          showStarRateIcon
          starRateIconVisible
          starRateIconVisible1
          starRateIconVisible2
          starRateIconVisible3
          showIcon
          review2MinHeight="unset"
          starsImageWidth="unset"
          starsImageHeight="unset"
          starRateIconMinHeight="24px"
          starRateIconMinHeight1="24px"
          starRateIconMinHeight2="24px"
          starRateIconMinHeight3="24px"
          starRateIconMinHeight4="24px"
        />
        <Review
          starRate="/star-rate.svg"
          theFoodAndDrinksWereADeli="Downloaded the app and was playing in no time! Loved the mix of classic pinball and cutting-edge gaming. Will definitely be a regular here."
          lindaM="Katie W."
          showStarsImage
          showStarRateIcon
          starRateIconVisible
          starRateIconVisible1
          starRateIconVisible2
          starRateIconVisible3
          showIcon
          review2MinHeight="unset"
          starsImageWidth="unset"
          starsImageHeight="unset"
          starRateIconMinHeight="24px"
          starRateIconMinHeight1="24px"
          starRateIconMinHeight2="24px"
          starRateIconMinHeight3="24px"
          starRateIconMinHeight4="24px"
        />
        <Review
          starRate="/star-half.svg"
          theFoodAndDrinksWereADeli="Family fun for everyone. We spent the entire day exploring the different games, and the kids loved it. The mobile app made booking a breeze!"
          lindaM="Jake R."
          showStarsImage
          showStarRateIcon
          starRateIconVisible
          starRateIconVisible1
          starRateIconVisible2
          starRateIconVisible3
          showIcon
          review2MinHeight="unset"
          starsImageWidth="unset"
          starsImageHeight="unset"
          starRateIconMinHeight="24px"
          starRateIconMinHeight1="24px"
          starRateIconMinHeight2="24px"
          starRateIconMinHeight3="24px"
          starRateIconMinHeight4="24px"
        />
      </div>
    </section>
  );
};

export default ReviewSection;
