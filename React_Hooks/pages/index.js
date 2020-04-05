import React, { useState } from "react";

const InputElement = () => {
  const [input, setInput] = useState("");
  const [history, setHistoryList] = useState([]);

  return (
    <div>
      <input
        onChange={(e) => {
          setInput(e.target.value);
          setHistoryList([...history, input]);
        }}
        placeholder='Enter something'
      />
      <hr />
      <br />
      <ul>
        {history.map((input) => {
          return <div>{input}</div>;
        })}
      </ul>
    </div>
  );
};

export default InputElement;
