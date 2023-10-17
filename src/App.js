import logo from './logo.svg';
import './App.css';
import Login from './components/auth/Login';

function App() {
  return (
    <>
      <div className='overall'>
        <h1 className='app-title'>
        bookify
      </h1>
      <Login></Login>
      </div>
    </>
  );
}

export default App;
