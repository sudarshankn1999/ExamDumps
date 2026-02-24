function QuestionCard({
  question,
  answers,
  setAnswers,
  submitted
}) {
  const handleSingle = (value) => {
    setAnswers(prev => ({ ...prev, [question.id]: value }));
  };

  const handleMulti = (value) => {
    const current = answers[question.id] || [];

    if (current.includes(value)) {
      setAnswers(prev => ({
        ...prev,
        [question.id]: current.filter(v => v !== value)
      }));
    } else {
      if (current.length >= question.maxSelections) return;

      setAnswers(prev => ({
        ...prev,
        [question.id]: [...current, value]
      }));
    }
  };

  const getOptionClass = (option) => {
    if (!submitted) return "option";

    if (question.type === "single") {
      if (option === question.correctAnswer)
        return "option correct";
      if (answers[question.id] === option)
        return "option wrong";
    }

    if (question.type === "multi") {
      if (question.correctAnswers.includes(option))
        return "option correct";
      if (answers[question.id]?.includes(option))
        return "option wrong";
    }

    return "option";
  };

  return (
    <div className="question-card">
      <h4>{question.question}</h4>

      {question.options.map(opt => (
        <div key={opt} className={getOptionClass(opt)}>
          <input
            type={question.type === "single" ? "radio" : "checkbox"}
            name={`q-${question.id}`}
            checked={
              question.type === "single"
                ? answers[question.id] === opt
                : answers[question.id]?.includes(opt) || false
            }
            onChange={() =>
              question.type === "single"
                ? handleSingle(opt)
                : handleMulti(opt)
            }
            disabled={submitted}
          />
          {" "}{opt}
        </div>
      ))}
    </div>
  );
}

export default QuestionCard;