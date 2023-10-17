import logo from './logo.svg';
import './App.css';
import Login from './components/auth/Login';
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
      
    </>
  );
}

export default App;
