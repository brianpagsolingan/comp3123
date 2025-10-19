import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react/jsx-runtime';
import Hello from './components/Hello';
import Student from './components/Student';
import Employee from './components/Employee';
function App() {
  let name = "Brian Pagsolingan Student";
  let myStyle = {color:'blue', backgroundColor:'yellow'};
  return (
    <Fragment>
      <h1 style={{color:'red', backgroundColor:'purple'}}>Hello World</h1>
      <h2 style={myStyle}>{name}</h2>
      <Hello />
      <Student sid="123" name="Brian Pagsolingan" age="22" course="BSIT" />
      <Employee />
    </Fragment>
  );
}

export default App;
