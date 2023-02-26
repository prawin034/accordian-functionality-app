import { useState } from 'react';
import { data } from './components/data';
import Question from './components/question';
function App() {
  const [questions, setquestions] = useState(data);

  const deletehandler = () => {
    setquestions([]);
  };
  return (
    <div className="App">
      <section className="accordian">
        <h2 className="accordian_heading">
          {questions.length} QUESTIONS AND ANSWERS
        </h2>
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
        <button className="accordian_btns" onClick={deletehandler}>
          delete all
        </button>
      </section>
    </div>
  );
}

export default App;
