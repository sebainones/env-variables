import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Probando variables de entorno
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.REACT_APP_NAME}
        </a>
        <p>Entorno de desarrollo: {process.env.NODE_ENV}</p>
        <p>Variable react: {process.env.REACT_APP_RANDOM_KEY}</p>
      </header>
    </div>
  );
  
}

export default App;
