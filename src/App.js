import { beautifulThumb } from "./.api";
import Toggle from "./component/state/Toggle";
import Thumnail from "./component/Thumbnail";
import GameBoard from "./component/tictactoe/GameBoard";

function App() {
  return (
    <div>
      <GameBoard />

      <div style={{ height: "200px"}}></div>

      <Toggle />

      <div style={{
        height: "10px"
      }}></div>

      <div className="content-grid">
        {beautifulThumb.map(item => (
          <Thumnail
            id={item.id}
            img={item.img}
            title={item.title}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
