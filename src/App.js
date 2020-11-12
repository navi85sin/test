import './App.css';
import Button from './component/button/button';

function App() {
  const text = 'hello Navdeep';
  return (
    <div className="App">
       <Button text={text} />
    </div>
  );
}

export default App;
