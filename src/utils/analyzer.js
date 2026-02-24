export function analyzePerformance(questions, answers) {
  const report = {};

  questions.forEach(q => {
    if (!report[q.category])
      report[q.category] = { correct: 0, wrong: 0 };

    let correct = false;

    if (q.type === "single")
      correct = answers[q.id] === q.correctAnswer;

    if (q.type === "multi")
      correct =
        (answers[q.id] || []).sort().join(",") ===
        q.correctAnswers.sort().join(",");

    if (correct)
      report[q.category].correct++;
    else
      report[q.category].wrong++;
  });

  return report;
}