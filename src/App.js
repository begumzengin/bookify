import "./App.css";
import AuthDetails from "./components/auth/AuthDetails";
import Login from "./components/auth/Login";
import rubberPlant from "./rubber-plant.png";
import { PrimeReactProvider } from "primereact/api";

function App() {
  return (
    <>
      <PrimeReactProvider>
        <div className="title-container">
          <h1 className="app-title">bookify</h1>
          <img className="app-logo" src={rubberPlant} alt="app logo" />
        </div>
        <br />
        <Login></Login>
        <AuthDetails />
      </PrimeReactProvider>
    </>
  );
}

export default App;
