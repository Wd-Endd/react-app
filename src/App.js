import { beautifulThumb } from "./.api";
import Thumnail from "./component/Thumbnail";

function App() {
  return (
    <div class="content-grid">
      {beautifulThumb.map(item => (
        <Thumnail
          id={item.id}
          img={item.img}
          title={item.title}
        />
      ))}
    </div>
  );
}

export default App;
