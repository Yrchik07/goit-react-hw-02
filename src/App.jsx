import { useEffect, useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};
function App() {
  const [feedbackStatistics, setFeedbackStatistics] = useState(() => {
    const feedbackLocalValues = localStorage.getItem('feedbackValues');
    const parsedFeedback = JSON.parse(feedbackLocalValues) ?? initialFeedback;
    return parsedFeedback;
  });

  const updateFeedback = feedbackType => {
    setFeedbackStatistics({
      ...feedbackStatistics,
      [feedbackType]: feedbackStatistics[feedbackType] + 1,
    });
  };

  const totalFeedback =
    feedbackStatistics.good +
    feedbackStatistics.neutral +
    feedbackStatistics.bad;

  const positiveFeedback = Math.round(
    ((feedbackStatistics.good + feedbackStatistics.neutral) / totalFeedback) *
      100,
  );
  useEffect(() => {
    localStorage.setItem('feedbackValues', JSON.stringify(feedbackStatistics));
  }, [feedbackStatistics]);

  const resetFeedback = () => {
    setFeedbackStatistics(initialFeedback);
  };

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        resetFeedback={resetFeedback}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackStatistics={feedbackStatistics}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
