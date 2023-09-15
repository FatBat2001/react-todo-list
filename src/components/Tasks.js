import TaskElement from "./TaskElement";

const Tasks = ({ complete, inComplete }) => {
  return (
    <div>
      <h3 style={{color:'rgb(174, 99, 187)'}}>Incompleted</h3>
        {
            complete.map((taskContent, index) =>(
                <TaskElement key={index} content ={taskContent}
                fill={false} />
            ))
        }
        
      <h3 style={{color:'rgb(174, 99, 187)'}} >Completed</h3>
        {
            inComplete.map((taskContent, index) =>(
                <TaskElement key={index} content ={taskContent} 
                fill={true}/>
            ))
        }
    </div>
  );
};

export default Tasks;
