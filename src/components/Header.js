import './styles/header.css';
const Header = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const day = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const exactDay = currentDate.getDate();
    return (
        <div className="header-wrapper">
            <h1 >Doing Today</h1>
            <h3>{`${day}, ${month} ${exactDay}`}</h3>
        </div>
    )
};

export default Header;
