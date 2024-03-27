import styles from "./Options.module.css";

const Options = ({ fooUpdateFeedback, totalFeedbacks, resetFeedback }) => {
  return (
    <ul className={styles.optionsList}>
      <li>
        <button onClick={() => fooUpdateFeedback("good")}>Good</button>
      </li>
      <li>
        <button onClick={() => fooUpdateFeedback("neutral")}>Neutral</button>
      </li>
      <li>
        <button onClick={() => fooUpdateFeedback("bad")}>Bad</button>
      </li>
      {totalFeedbacks > 0 && (
        <li>
          <button onClick={resetFeedback}>Reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
