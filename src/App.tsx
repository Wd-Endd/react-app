import FullToggle from './components/FullToggle';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';
import React, { createContext, useReducer, useEffect, useState } from 'react';
import "./App.scss";
import list from "./API";
import ViewModeTransform from "./events/ViewModeTransform";
import eruda from "eruda";


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
    ViewModeTransform(viewMode)
  }, [viewMode]);
  useEffect(() => {
    if (process.env.NODE_ENV === "development") { eruda.init(); }
  }, []);

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
      <div className="dev flex items-center justify-center flex-row p-3 pt-[30px] pt-[70px]">
        <div className="dev w-full max-w-[900px] flex">
          <div data-onlyViewMode className="dev flex-1 flex">
            <div className="dev w-1/2 aspect-square flex flex-col justify-center">
              <Button next={false} content="<"/>
            </div>
          </div>
          <div data-cardAnchor className="dev flex items-center h-[400px] p-2">
            <Card />
          </div>
          <div data-onlyViewMode className="flex-1 flex justify-end ">
            <div className="dev w-1/2 aspect-square flex flex-col justify-center">
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