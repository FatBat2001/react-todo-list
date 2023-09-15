import './styles/taskelement.css';
const TaskElement = ({content, fill}) => {
  return (
      <div className = "list-item">
      <button className='check'style={fill? {backgroundColor:'white'}: {}}>&#x2713;</button>
      <div className="text">
        {content}
      </div>
      <button className='edit'>🗑</button>
    </div>
  )
};

export default TaskElement;
