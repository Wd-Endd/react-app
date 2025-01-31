// import { beautifulThumb } from "./.api";
// import Toggle from "./component/state/Toggle";
// import Thumnail from "./component/Thumbnail";
// import Game from "./component/tictactoe/Game";

import styled from "styled-components";
import Card from "./component/card/Card";
import list from "./component/card/api";

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
function App() {
    return (
        <MainContent>
            {
                list.map((item, index) => (
                    <Card
                        props={{
                            ...item,
                            index: index
                        }}
                    />
                ))
            }
            {/* <Game />

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
      </div> */}

        </MainContent>
    );
}

export default App;
