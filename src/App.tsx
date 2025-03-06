import Header from './components/Header';
import CardGallery from './components/Card';
import React, { createContext, useReducer, useEffect, useState } from 'react';
import "./App.scss";
import list from "./API";
import ViewModeTransform from "./events/ViewModeTransform";
import eruda from "eruda";
// import refStore from "./refStore";


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
    if (!viewMode) {
      ViewModeTransform.start();
    } else {
      ViewModeTransform.destroy();
    }
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
      <div className="blur-bg"></div>
      <div className="content-bg h-screen p-10">
        <CardGallery />
      </div>
    </AppContext.Provider>
  );
}

export default App;
export { AppContext };