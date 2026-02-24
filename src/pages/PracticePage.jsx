import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions.json";
import QuestionRenderer from "../components/QuestionRenderer";

function PracticePage() {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const submitExam = () => {
    localStorage.setItem("lastAttempt", JSON.stringify(answers));
    navigate("/result", { state: { answers } });
  };

  return (
    <div className="container">
      <div className="header">Exam Practice</div>

      {questions.map(q => (
        <QuestionRenderer
          key={q.id}
          question={q}
          answers={answers}
          setAnswers={setAnswers}
        />
      ))}

      <button onClick={submitExam}>Submit Exam</button>
    </div>
  );
}

export default PracticePage;