import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.arrowArranger}>
          <img
            className={styles.sandboxIcon}
            loading="lazy"
            alt=""
            src="/sandbox.svg"
          />
          <div className={styles.colorChooser}>
            <div className={styles.sizeScaler}>
              <img
                className={styles.positionPlacerIcon}
                alt=""
                src="/data-filter.svg"
              />
              <img
                className={styles.alignmentAlignerIcon}
                alt=""
                src="/vector-1.svg"
              />
            </div>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <img
              className={styles.rotationRotatorIcon}
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.newsletterSection}>
            <div className={styles.newsletterHeading}>
              <b className={styles.stayInThe}>Stay In The Loop</b>
              <div className={styles.signUpTo}>
                Sign up to receive up to date news and offers directly in your
                inbox:
              </div>
            </div>
            <div className={styles.newsletterForm}>
              <div className={styles.input}>
                <div className={styles.input1}>
                  <div className={styles.field}>
                    <img
                      className={styles.iconleft}
                      alt=""
                      src="/iconleft.svg"
                    />
                    <div className={styles.content}>
                      <div className={styles.label}>Label</div>
                      <div className={styles.input2}>
                        <div className={styles.canvasCanvasser}>
                          you@example.com
                        </div>
                        <div className={styles.chiplist}>
                          <div className={styles.chip}>
                            <div className={styles.chip1}>
                              <div className={styles.avatars32px}>
                                <img
                                  className={styles.avatarIcon}
                                  alt=""
                                  src="/-avatar@2x.png"
                                />
                              </div>
                              <div className={styles.iconLabel}>
                                <img
                                  className={styles.icon}
                                  alt=""
                                  src="/icon.svg"
                                />
                                <div className={styles.chipLabel}>
                                  Chip label
                                </div>
                              </div>
                              <img
                                className={styles.removeIcon}
                                alt=""
                                src="/remove-icon.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.chip2}>
                            <div className={styles.chip3}>
                              <div className={styles.avatars32px1}>
                                <img
                                  className={styles.avatarIcon1}
                                  alt=""
                                  src="/-avatar@2x.png"
                                />
                              </div>
                              <div className={styles.iconLabel1}>
                                <img
                                  className={styles.icon1}
                                  alt=""
                                  src="/icon.svg"
                                />
                                <div className={styles.chipLabel1}>
                                  Chip label
                                </div>
                              </div>
                              <img
                                className={styles.removeIcon1}
                                alt=""
                                src="/remove-icon.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.button}>
                      <div className={styles.button1}>
                        <div className={styles.labelButtons}>
                          <img
                            className={styles.iconleft1}
                            alt=""
                            src="/iconleft.svg"
                          />
                          <div className={styles.buttonLabel}>
                            <b className={styles.label1}>Button label</b>
                          </div>
                          <img
                            className={styles.iconright}
                            alt=""
                            src="/iconright.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.numeric}>
                      <img
                        className={styles.btnupIcon}
                        alt=""
                        src="/btnup.svg"
                      />
                      <img
                        className={styles.btndownIcon}
                        alt=""
                        src="/btndown.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.extraInfo}>
                    <div className={styles.helper}>
                      <img className={styles.icon2} alt="" src="/icon.svg" />
                      <div className={styles.label2}>Helper text</div>
                    </div>
                    <div className={styles.counter}>
                      <div className={styles.current}>0</div>
                      <div className={styles.slash}>/</div>
                      <div className={styles.limit}>0</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.button2}>
                <div className={styles.button3}>
                  <div className={styles.labelButtons1}>
                    <img
                      className={styles.iconleft2}
                      alt=""
                      src="/iconleft.svg"
                    />
                    <div className={styles.buttonLabel1}>
                      <b className={styles.label3}>Subscribe</b>
                    </div>
                    <img
                      className={styles.iconright1}
                      alt=""
                      src="/iconright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.exploreLinks}>
            <b className={styles.explore}>Explore</b>
            <div className={styles.highlanders}>Highlanders</div>
            <div className={styles.bankOfPinball}>Bank of Pinball</div>
            <div className={styles.ebash}>eBash</div>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.contact}>Contact</div>
          </div>
          <div className={styles.connectLinks}>
            <b className={styles.connectWithUs}>Connect With Us</b>
            <div className={styles.facebook}>Facebook</div>
            <div className={styles.rss}>RSS</div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyright2023Tilt}>
          © Copyright 2023 Tilt LLC
        </div>
      </div>
    </footer>
  );
};

export default Footer;
