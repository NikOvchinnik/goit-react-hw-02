import styles from "./Options.module.css";

const Options = ({ fooUpdateFeedback, totalFeedbacks, setFeedbacks }) => {
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
          <button
            onClick={() =>
              setFeedbacks({
                good: 0,
                neutral: 0,
                bad: 0,
              })
            }
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
