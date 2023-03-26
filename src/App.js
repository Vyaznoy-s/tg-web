
import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
const tg = window.Telegram.WebApp;
function App() {

    const {onToggelButton, tg} = useTelegram();


    useEffect(() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
        <button onClick={onToggelButton}>toggle</button>
      <button oneClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;