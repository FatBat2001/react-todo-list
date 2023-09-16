import { useEffect, useState } from "react";
import "./main.css";
import Header from "./components/Header";
import InputLabel from "./components/InputLabel";
import Tasks from "./components/Tasks";
import Blank from "./components/Blank";

const Main = () => {
    
    const [pending, setPending] = useState([]);
    const [completed, setCompleted] = useState([]);
    const addTask = (taskText) => {      
        setPending(taskText !== '' ? [...pending, taskText] : [...pending]);
    }    
    
    const completeTask = (flag, taskIndex) => {
      if (!flag){
        setCompleted([...completed, pending[taskIndex]]);
        const temp = pending;
        temp.splice(taskIndex, 1);
        setPending([...temp]);
      } else {
        setPending([...pending, completed[taskIndex]]);
        const temp = completed;
        temp.splice(taskIndex, 1);
        setCompleted([...temp]);
      }
    }
    const deleteTask = (flag, taskIndex) => {
      const temp = flag ? completed : pending;
      temp.splice(taskIndex, 1);
      flag ? setCompleted([...temp]): setPending([...temp]);
    }
    useEffect(() => {
      
    }, [pending, completed])
  return (
    <div className="main-wrapper">
      <div className="secondary-wrapper">
        <Header />
        <div className="tasks">
          {
              completed.length || pending.length ?
              (<Tasks 
              complete={pending}
              inComplete={completed}
              checkTask={completeTask}
              deleteTask={deleteTask}
              />) :
              (<Blank/>)
          }
        </div>
        <div className="input-label-wrapper">
          <InputLabel className="input-label-wrapper" addTask={addTask}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
