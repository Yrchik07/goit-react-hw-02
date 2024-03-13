import { useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';

function App() {
  const [feedbackStatistics, setFeedbackStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
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

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options updateFeedback={updateFeedback} />
      <Feedback
        feedbackStatistics={feedbackStatistics}
        totalFeedback={totalFeedback}
      />
    </>
  );
}

export default App;
