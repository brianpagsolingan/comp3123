import logo from './logo.svg';
import './App.css';
import StudentInfo from './components/StudentInfo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to Full Stack Development-1
        </h1>
        <h2>
          React Js Week 7 Exercise
        </h2>
        <StudentInfo sid={101490258} name="Brian Pagsolingan" school="George Brown College" city="Toronto" />
      </header>

    </div>
  );
}

export default App;
