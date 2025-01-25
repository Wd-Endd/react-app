import { beautifulThumb } from "./.api";
import CaroBoard from "./component/CaroBoard";
import Toggle from "./component/state/Toggle";
import Thumnail from "./component/Thumbnail";

function App() {
  return (
    <div>
      <CaroBoard />

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
