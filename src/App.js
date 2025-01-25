import { beautifulThumb } from "./.api";
import Toggle from "./component/state/Toggle";
import Thumnail from "./component/Thumbnail";

function App() {
  return (
    <div>

      <div className="content-grid">
        {beautifulThumb.map(item => (
          <Thumnail
            id={item.id}
            img={item.img}
            title={item.title}
          />
        ))}
      </div>

      <Toggle />
    </div>
  );
}

export default App;
