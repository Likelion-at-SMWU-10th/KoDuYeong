import React, { useState, useRef } from "react";

function InputSample(){
  const [inputs, setInputs] = useState({
    name: '',
    dream: ''
  });

  const nameInput = useRef();

  const { name, dream } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      dream: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input nam="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
      <input name="dream" placeholder="꿈" onChange={onChange} value={dream} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} : {dream}
      </div>
    </div>
  );
}

export default InputSample;