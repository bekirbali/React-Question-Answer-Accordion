import { useState } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import styles from "./Accord.module.scss";

export const Accord = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles["accord-container"]}>
      <div className={styles.accord}>
        <p className={styles.questions}>
          {question}{" "}
          {!show ? (
            <button onClick={() => setShow(!show)}>
              <BsFillArrowDownCircleFill />
            </button>
          ) : (
            <button onClick={() => setShow(!show)}>
              <BsFillArrowUpCircleFill />
            </button>
          )}
        </p>
        <p className={styles.answer}>{show && answer}</p>
      </div>
    </div>
  );
};
