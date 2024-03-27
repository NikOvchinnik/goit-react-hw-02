import styles from "./Feedback.module.css";

const Feedback = ({ totalFeedbacks, positiveFeedbacks, feedbacks: { good, neutral, bad } }) => {

  return (
    <ul className={styles.feedbackList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li className={styles.feedbackItem}>Total: {totalFeedbacks}</li>
      <li className={styles.feedbackItem}>Positive: {positiveFeedbacks}%</li>
    </ul>
  );
};

export default Feedback;
