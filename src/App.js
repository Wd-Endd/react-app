// import { beautifulThumb } from "./.api";
// import Toggle from "./component/state/Toggle";
// import Thumnail from "./component/Thumbnail";
// import Game from "./component/tictactoe/Game";

import styled from "styled-components";
import Card from "./component/card/Card";
import list from "./component/card/api";
import { createContext, useReducer } from "react";

const CardContainer = styled.div`
    /* display: flex; */
    position: relative;
    /* width: 500px; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
`;

function cardReducer(state, action) {
    switch (action) {
        default:
            return state;
    }
};

const AppContext = createContext();

function App() {
    const [currIndex, dispatch] = useReducer(cardReducer, 0);
    return (
        <AppContext.Provider value={{
            currIndex,
            dispatch
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                // alignContent: "center",
                // alignItems: "center",
                justifyContent: "center",
                justifyItems: "center",
            }}>
                <CardContainer>
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

                </CardContainer>
            </div>
        </AppContext.Provider>
    );
}

export default App;
export { AppContext };