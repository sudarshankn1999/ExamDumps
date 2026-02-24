import { useState, useEffect } from "react";

function DragDropMatch({ question, setAnswers }) {
  const [matches, setMatches] = useState({});

  useEffect(() => {
    setAnswers(prev => ({ ...prev, [question.id]: matches }));
  }, [matches]);

  return (
    <div className="question-card">
      <h4>{question.question}</h4>

      {question.leftItems.map(item => (
        <div key={item} className="option">
          {item}
          <select
            onChange={(e) =>
              setMatches(prev => ({
                ...prev,
                [item]: e.target.value
              }))
            }
          >
            <option value="">Select</option>
            {question.rightItems.map(opt => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default DragDropMatch;