// import logo from './logo.svg';
import './App.css';
import SimpleForm from './SimpleForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <em>Change schema file code</em> <code>age.number()</code> <em>to</em> <code>age.int()</code> to trigger failure.
        </p>
      </header>
      <div>
        <SimpleForm />
      </div>
    </div>
  );
}

export default App;
