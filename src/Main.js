import "./main.css";
import Header from "./components/Header";
import InputLabel from "./components/InputLabel";
import Tasks from "./components/Tasks";
const Main = () => {
    const completed = ["adhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadhamadham", "khaled", "moussa"];
    const pending = ["omer", "khaled", "ebid"];

  return (
    <div className="main-wrapper">
      <div className="secondary-wrapper">
        <Header />
        <div className="tasks">
          <Tasks complete={completed} inComplete={pending} />
        </div>
        <div className="input-label-wrapper">
          <InputLabel className="input-label-wrapper" />
        </div>
      </div>
    </div>
  );
};

export default Main;
