import FullToggle from './components/FullToggle';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';
import React, { createContext, useReducer, useEffect, useState } from 'react';
import "./App.scss";
import list from "./API";
import { convertingViewMode, convertingDefaultMode } from "./events/OnViewMode";

const AppContext = createContext(Object.create({}));

export interface indexAction {
  type: string;
  payload?: number;
}

function indexReducer(state: number, action: indexAction) {
  switch (action.type) {
      case "NEXT":
        return state + 1;
      case "PREV":
        return state - 1;
      case "SELECT":
        return typeof action.payload === "number" ? action.payload : state;
    default:
      return state;
  }
}

function App() {
  const [ selectedIndex, disPatch ] = useReducer(indexReducer, 0);
  const [ viewMode, setViewMode ] = useState(true);
  useEffect(() => {
    document.body.style.backgroundImage = `url(${list[selectedIndex].bg})`
  }, [selectedIndex]);
  useEffect(() => {
    if (viewMode) {
      convertingViewMode();
    } else {
      convertingDefaultMode();
    }
  }, [viewMode]);

  return (
    <AppContext.Provider value={{
      selectedIndex,
      disPatch,
      viewMode,
      setViewMode,
    }}
    >
      <Header />
      <FullToggle />
      <div className="blur-bg"></div>
      <div className="dev !flex !items-center !justify-center !flex-row p-3 !pt-[30px] !pt-[70px]">
        <div className="dev !w-full !max-w-[900px] !flex">
          <div className="view-mode-only !flex-1 !flex">
            <div className="dev !w-1/2 !aspect-square !flex !flex-col !justify-center">
              <Button next={false} content="<"/>
            </div>
          </div>
          <div className="dev !flex !items-center !h-[400px] !p-2">
            <Card />
          </div>
          <div className="view-mode-only !flex-1 !flex !justify-end ">
            <div className="dev !w-1/2 !aspect-square !flex !flex-col !justify-center">
              <Button next={true} content=">"/>
            </div>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
export { AppContext };