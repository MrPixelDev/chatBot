import "./App.css";
import { Head } from "./header.component";
import { Chat } from "./chat.component";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Head />
        <div className="content">
          <Chat className="App" />
        </div>
      </div>
    </div>
  );
}

export default App;
