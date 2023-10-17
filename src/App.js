import './App.css';
import KanbanBoard from './components/kanban/KanbanBoard';
import rubberPlant from './rubber-plant.png';

function App() {
  return (
    <>
      <div className='title-container'>
          <h1 className='app-title'>
            bookify
          </h1>
          <img className="app-logo" src={rubberPlant} alt="app logo"/>
      </div>
      <br/>
      <KanbanBoard></KanbanBoard>
    </>
  );
}

export default App;
