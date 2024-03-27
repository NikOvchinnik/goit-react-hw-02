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
    window.localStorage.setItem(
      "saved-feedbacks",
      JSON.stringify(feedbacks)
    );
  }, [feedbacks]);

  const totalFeedbacks = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  return (
    <div className={styles.mainContainer}>
      <Description />
      <Options
        fooUpdateFeedback={updateFeedback}
        totalFeedbacks={totalFeedbacks}
        setFeedbacks={setFeedbacks}
      />
      {totalFeedbacks > 0 ? (
        <Feedback feedbacks={feedbacks} totalFeedbacks={totalFeedbacks} />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
