import { useToggle } from './useToggle';
import "./App.css";

function App() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <button onClick={() => toggle()}>
      {value}
    </button>
  );
}

export default App;
