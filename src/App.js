import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './components/homepage';
import NavBar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Homepage/>
      {/* <h1>🛠 Profile under construction...</h1> */}
    </BrowserRouter>
  );
}

export default App;
