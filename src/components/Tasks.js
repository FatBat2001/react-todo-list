import TaskElement from "./TaskElement";

const Tasks = ({ complete, inComplete, checkTask , deleteTask}) => {
  return (
    <div>
      <h3 style={{color:'rgb(174, 99, 187)'}}>Incompleted</h3>
        {
            complete.map((taskContent, index) =>(
                <TaskElement
                  key={index}
                  index={index}
                  content ={taskContent}
                  fill={false}
                  checkTask={checkTask}
                  deleteTask={deleteTask}
                />
            ))
        }
        
      <h3 style={{color:'rgb(174, 99, 187)'}} >Completed</h3>
        {  
             inComplete.map((taskContent, index) =>(
                <TaskElement 
                  key={index} 
                  index={index}
                  content ={taskContent} 
                  fill={true}
                  checkTask={checkTask}
                  deleteTask={deleteTask}
                />
            ))
        }
    </div>
  );
};

export default Tasks;
