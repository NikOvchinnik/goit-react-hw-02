import styles from "./Feedback.module.css";

const Feedback = ({ totalFeedbacks, feedbacks: { good, neutral, bad } }) => {
  const positiveFeedbacks =
    totalFeedbacks > 0 ? Math.round((good / totalFeedbacks) * 100) : 0;

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
