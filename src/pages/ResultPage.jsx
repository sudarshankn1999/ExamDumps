import { useLocation, useNavigate } from "react-router-dom";
import questions from "../data/questions.json";
import { calculateScore } from "../utils/scoring";
import { analyzePerformance } from "../utils/analyzer";

function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const answers = state?.answers || {};

  const score = calculateScore(questions, answers);
  const analysis = analyzePerformance(questions, answers);

  return (
    <div className="container">
      <div className="header">Result</div>

      <div className="result-box">
        <h2>Total Score: {score} / 1000</h2>
        <h3>Status: {score >= 700 ? "PASS" : "FAIL"}</h3>
      </div>

      <div className="result-box">
        <h3>Performance Breakdown</h3>
        {Object.entries(analysis).map(([cat, data]) => (
          <p key={cat}>
            {cat}: {data.correct} correct / {data.wrong} wrong
          </p>
        ))}
      </div>

      <button onClick={() => navigate("/")}>Retry</button>
    </div>
  );
}

export default ResultPage;