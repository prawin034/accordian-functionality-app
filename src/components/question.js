import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showInfo, setshowInfo] = useState(false);

  const showHandler = () => {
    setshowInfo((showInfo) => !showInfo);
  };
  return (
    <article className="accordian_box">
      <header className="accordian_mini">
        <h4 className="accordian_box_title">{title}</h4>
        <button onClick={showHandler} className="accordian_btn">
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p className="accordian_box_para">{info}</p>}
    </article>
  );
};

export default Question;
