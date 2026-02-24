function SingleSelect({ question, answers, setAnswers }) {
  return (
    <div className="question-card">
      <h4>{question.question}</h4>

      {question.options.map(opt => (
        <div key={opt} className="option">
          <input
            type="radio"
            checked={answers[question.id] === opt}
            onChange={() =>
              setAnswers(prev => ({ ...prev, [question.id]: opt }))
            }
          />
          {" "}{opt}
        </div>
      ))}
    </div>
  );
}

export default SingleSelect;