import { useState } from 'react';
import './styles/inputlabel.css';


const InputLabel = ({addTask}) => {
  const handleClick = () => {
    addTask(text);
    document.getElementById('input').value = '';
    setText('');
  }
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const [text, setText] = useState('')
  return (
    <div className="input-wrapper">
      <input type="text" placeholder="What's on your mind today"
        onChange={handleChange}
        id='input'
      />
      <button onClick={handleClick}> Add task </button>
    </div>

  );
};

export default InputLabel;
