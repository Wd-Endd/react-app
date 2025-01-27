import { beautifulThumb } from "./.api";
import Toggle from "./component/state/Toggle";
import Thumnail from "./component/Thumbnail";
import GameBoard from "./component/tictactoe/GameBoard";
import ResetButton from "./component/tictactoe/ResetButton";
// import Turner from "./component/tictactoe/Turner";

function App() {
  return (
    <div>
      <div style={{
        display: "flex",
        flexDirection: "rows",
      }}>
        <GameBoard />
        {/* <Turner /> */}
        <ResetButton />
      </div>

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
