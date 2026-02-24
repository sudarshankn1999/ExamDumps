export function calculateScore(questions, answers) {
  const points = 1000 / questions.length;
  let score = 0;

  questions.forEach(q => {
    if (q.type === "single") {
      if (answers[q.id] === q.correctAnswer)
        score += points;
    }

    if (q.type === "multi") {
      const user = (answers[q.id] || []).sort().join(",");
      const correct = q.correctAnswers.sort().join(",");
      if (user === correct)
        score += points;
    }

    if (q.type === "order") {
      const user = (answers[q.id] || []).join(",");
      const correct = q.correctOrder.join(",");
      if (user === correct)
        score += points;
    }
  });

  return Math.round(score);
}