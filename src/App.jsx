import FeedBackOptions from "./components/FeedBackOptions";
import Statistics from "./components/Statistics";
import { useState } from "react";
import Section from "./components/Section";
import Notification from "./components/NotificationMessage";
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    const sum = good + neutral + bad;
    return sum;
  }
  function countPositiveFeedbackPercentage() {
    const sum = countTotalFeedback();
    const percentage = Math.round((good / sum) * 100);
    return percentage;
  }
  function AddGood() {
    setGood((prev) => prev + 1);
  }
  function AddNeutral() {
    setNeutral((prev) => prev + 1);
  }
  function AddBad() {
    setBad((prev) => prev + 1);
  }
  return (
    <div>
      <Section title="Please leave feedback">
      <FeedBackOptions
        onGoodClick={AddGood}
        onNeutralClick={AddNeutral}
        onBadClick={AddBad}
      />
      </Section>
      <Section>

        {countTotalFeedback() === 0 ? <Notification message="There is no feedback"/> : <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
        />}
      </Section>
    </div>
  );
}

export default App;