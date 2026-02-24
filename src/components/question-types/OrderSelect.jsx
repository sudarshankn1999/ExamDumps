import { useState, useEffect } from "react";

function OrderSelect({ question, setAnswers }) {
  const [order, setOrder] = useState(question.options);

  useEffect(() => {
    setAnswers(prev => ({ ...prev, [question.id]: order }));
  }, [order]);

  const moveUp = (index) => {
    if (index === 0) return;
    const newOrder = [...order];
    [newOrder[index - 1], newOrder[index]] =
      [newOrder[index], newOrder[index - 1]];
    setOrder(newOrder);
  };

  const moveDown = (index) => {
    if (index === order.length - 1) return;
    const newOrder = [...order];
    [newOrder[index + 1], newOrder[index]] =
      [newOrder[index], newOrder[index + 1]];
    setOrder(newOrder);
  };

  return (
    <div className="question-card">
      <h4>{question.question}</h4>

      {order.map((item, index) => (
        <div key={item} className="option">
          {item}
          <button onClick={() => moveUp(index)}>↑</button>
          <button onClick={() => moveDown(index)}>↓</button>
        </div>
      ))}
    </div>
  );
}

export default OrderSelect;