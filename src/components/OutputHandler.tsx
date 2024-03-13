import { FunctionComponent } from "react";
import styles from "./OutputHandler.module.css";

const OutputHandler: FunctionComponent = () => {
  return (
    <div className={styles.outputHandler}>
      <header className={styles.address}>
        <img className={styles.locationIcon} alt="" src="/location-icon.svg" />
        <div
          className={styles.visitUsIn}
        >{`Visit us in Haute City Center, 3401 S US Hwy 41, Terre Haute, IN `}</div>
      </header>
      <div className={styles.navbar}>
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
                className={styles.dataFilterIcon}
                alt=""
                src="/data-filter.svg"
              />
              <img
                className={styles.dataTransformerIcon}
                alt=""
                src="/vector-1.svg"
              />
            </div>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <img
              className={styles.dataSplitterIcon}
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </div>
        <div className={styles.navigationLinks}>
          <div className={styles.navigationMenuItem}>
            <div className={styles.button}>
              <div className={styles.labelButtons}>
                <img className={styles.iconleft} alt="" src="/iconleft.svg" />
                <div className={styles.buttonLabel}>
                  <a className={styles.label}>Highlanders</a>
                </div>
                <img className={styles.iconright} alt="" src="/iconright.svg" />
              </div>
            </div>
          </div>
          <div className={styles.navigationMenuItem1}>
            <div className={styles.button1}>
              <div className={styles.labelButtons1}>
                <img className={styles.iconleft1} alt="" src="/iconleft.svg" />
                <div className={styles.buttonLabel1}>
                  <b className={styles.label1}>eBash</b>
                </div>
                <img
                  className={styles.iconright1}
                  alt=""
                  src="/iconright.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.navigationMenuItem2}>
            <div className={styles.button2}>
              <div className={styles.labelButtons2}>
                <img className={styles.iconleft2} alt="" src="/iconleft.svg" />
                <div className={styles.buttonLabel2}>
                  <b className={styles.label2}>Bank of Pinball</b>
                </div>
                <img
                  className={styles.iconright2}
                  alt=""
                  src="/iconright.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.navigationMenuItem3}>
            <div className={styles.button3}>
              <div className={styles.labelButtons3}>
                <img className={styles.iconleft3} alt="" src="/iconleft.svg" />
                <div className={styles.buttonLabel3}>
                  <b className={styles.label3}>Weathertop</b>
                </div>
                <img
                  className={styles.iconright3}
                  alt=""
                  src="/iconright.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.navigationMenuItem4}>
            <div className={styles.button4}>
              <div className={styles.labelButtons4}>
                <img className={styles.iconleft4} alt="" src="/iconleft.svg" />
                <div className={styles.buttonLabel4}>
                  <b className={styles.label4}>Lucky Putt</b>
                </div>
                <img
                  className={styles.iconright4}
                  alt=""
                  src="/iconright.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.navigationMenuItem5}>
            <div className={styles.button5}>
              <div className={styles.labelButtons5}>
                <img className={styles.iconleft5} alt="" src="/iconleft.svg" />
                <div className={styles.buttonLabel5}>
                  <b className={styles.label5}>About Us</b>
                </div>
                <img
                  className={styles.iconright5}
                  alt=""
                  src="/iconright.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.button6}>
            <div className={styles.button7}>
              <div className={styles.labelButtons6}>
                <img className={styles.iconleft6} alt="" src="/iconleft.svg" />
                <div className={styles.buttonLabel6}>
                  <b className={styles.label6}>Contact Us</b>
                </div>
                <img
                  className={styles.iconright6}
                  alt=""
                  src="/iconright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputHandler;
