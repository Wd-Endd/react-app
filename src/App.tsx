import Button from './Button';
import Card from './Card';
import React, { createContext, useReducer } from 'react';
import "./App.scss";


const AppContext = createContext(Object.create({}));
function indexReducer(state: number, action: string) {
  switch (action) {
      case "NEXT":
        return state +  1;
      case "PREV":
        return state -  1;
    default:
      return state;
  }
}

function App() {
  const [ selectedIndex, disPatch ] = useReducer(indexReducer, 2)
  return (
    <AppContext.Provider value={{ selectedIndex, disPatch }}>
      <div className="!flex !items-center !justify-center !flex-row p-3 !pt-[30px]">
        <div className="!w-full !max-w-[900px] !flex">
          <div className="!flex-1 !flex">
            <div className="!w-1/2 !aspect-square !flex !flex-col !justify-center">
              <Button next={false} content="<"/>
            </div>
          </div>
          <div className="dev !flex !items-center !h-[400px] !p-2">
            <Card />
          </div>
          <div className="!flex-1 !flex !justify-end">
            <div className="!w-1/2 !aspect-square !flex !flex-col !justify-center">
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