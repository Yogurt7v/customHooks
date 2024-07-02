import { useLocalStorage } from "./useLocalStorage";
import "./App.css";

function App() {

  const [token, { setItem, removeItem }] = useLocalStorage("Token");

  return (
    <div>
      <p>Твой токен: {token}</p>
      <div>
        <button onClick={() => setItem("new-token")}>Задать токен</button>
        <button onClick={() => removeItem()}>Удалить токен</button>
      </div>
    </div>
  );
}

export default App;
