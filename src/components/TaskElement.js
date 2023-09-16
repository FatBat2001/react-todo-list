import './styles/taskelement.css';
const TaskElement = ({content, fill, index, checkTask, deleteTask}) => {
  const handleCheck = ()=> {
    checkTask(fill, index);
  }
  const handleDelete = () =>{
    deleteTask(fill, index);
  }

  return (
      <div className = "list-item">
      <button className='check'style={fill? {backgroundColor:'white'}: {}}
        onClick={handleCheck}
      >&#x2713;</button>
      <div className="text">
        {content}
      </div>
      <button className='delete' onClick={handleDelete}>🗑</button>
    </div>
  )
};

export default TaskElement;
