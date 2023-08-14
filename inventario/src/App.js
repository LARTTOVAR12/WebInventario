import logo from './stylesImg/img/logo.svg';
import './stylesImg/style/App.css';

//importar componentes
import Barras from './componentes/Barras';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Leider <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Barras/>
      </header>
      <section className='componentes'>
        <Barras/>
      </section>

    </div>
  );
}

export default App;
