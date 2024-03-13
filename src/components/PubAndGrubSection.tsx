import { FunctionComponent } from "react";
import styles from "./PubAndGrubSection.module.css";

const PubAndGrubSection: FunctionComponent = () => {
  return (
    <section className={styles.pubAndGrubSection}>
      <div className={styles.pubandgrubHeading}>
        <h1 className={styles.pubGrub}>{`pub & grub`}</h1>
        <div className={styles.fromGourmetBites}>
          From gourmet bites to refreshing brews, elevate your game with our
          irresistible pub and grub experience. Play, savor, and unwind – a
          culinary adventure awaits!
        </div>
      </div>
      <div className={styles.pubandgrubSlider}>
        <img
          className={styles.image1Icon}
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <img
          className={styles.image2Icon}
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
        <img
          className={styles.image3Icon}
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
      <div className={styles.button}>
        <div className={styles.button1}>
          <div className={styles.labelButtons}>
            <img className={styles.iconleft} alt="" src="/iconleft.svg" />
            <div className={styles.buttonLabel}>
              <b className={styles.label}>View Food and Drinks Menu</b>
            </div>
            <img className={styles.iconright} alt="" src="/iconright1.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PubAndGrubSection;
