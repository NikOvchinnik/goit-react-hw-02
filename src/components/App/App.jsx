import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("saved-feedbacks");
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedbacks = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedbacks =
    totalFeedbacks > 0
      ? Math.round((feedbacks.good / totalFeedbacks) * 100)
      : 0;

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <div className={styles.mainContainer}>
      <Description />
      <Options
        fooUpdateFeedback={updateFeedback}
        totalFeedbacks={totalFeedbacks}
        resetFeedback={resetFeedback}
      />
      {totalFeedbacks > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          positiveFeedbacks={positiveFeedbacks}
          totalFeedbacks={totalFeedbacks}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
