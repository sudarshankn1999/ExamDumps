import SingleSelect from "./question-types/singleSelect";
import MultiSelect from "./question-types/MultiSelect";
import OrderSelect from "./question-types/OrderSelect";
import DragDropOrder from "./question-types/DragDropOrder";
import DragDropMatch from "./question-types/DragDropMatch";

function QuestionRenderer({ question, answers, setAnswers }) {
  switch (question.type) {
    case "single":
      return <SingleSelect {...{ question, answers, setAnswers }} />;
    case "multi":
      return <MultiSelect {...{ question, answers, setAnswers }} />;
    case "order":
      return <OrderSelect {...{ question, answers, setAnswers }} />;
    case "drag-order":
      return <DragDropOrder {...{ question, answers, setAnswers }} />;
    case "drag-match":
      return <DragDropMatch {...{ question, answers, setAnswers }} />;
    default:
      return null;
  }
}

export default QuestionRenderer;