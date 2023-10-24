import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import KanbanBoard from "./components/kanban/KanbanBoard";
import rubberPlant from "./rubber-plant.png";

function App() {
  return (
    <>
      <div className="title-container">
        <h1 className="app-title">bookify</h1>
        <img className="app-logo" src={rubberPlant} alt="app logo" />
      </div>
      <br />
      {/* <KanbanBoard></KanbanBoard> */}
      <Login></Login>
      <SignUp></SignUp>
    </>
  );
}

export default App;
