import './App.css';
import { Message } from "./Message/Message";
import {useState} from "react";

export const App = () => {
    const [text, setText] = useState('test');

    const handleChangeText = (ev) => {
        setText(ev.target.value);
    }
  return (
    <div className="App">
        <input onChange={handleChangeText} className='setText'/>
      <Message text={text}/>
    </div>
  );
}

export default App;
