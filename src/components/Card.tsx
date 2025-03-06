import FullToggle from './FullToggle';
import Button from './Button';
import React, { useContext, useEffect, useState, useMemo } from 'react'
import "./Card.scss"
import "../App.scss"
import list from "../API"
import { AppContext } from "../App"

// interface Var extends React.CSSProperties {
//   '--avt'?: string,
//   '--bg'?: string,
// }

export default function CardGallery() {
  return (
    <div className="card-dialog flex flex-col items-center justify-center flex-row">
      <FullToggle />
      <div className="dialog-header w-full h-16">Sưu Tầm</div>
      <div className="card-gallery overflow-auto w-full max-w-[900px] flex">
        <div className="only-view-mode card-padding flex-1 flex">
          <div className="w-1/2 aspect-square flex flex-col justify-center">
            <Button next={false} content="<"/>
          </div>
        </div>
        <div className="flex items-center h-[400px] p-2">
          <Card />
        </div>
        <div className="only-view-mode flex-1 flex justify-end ">
          <div className="w-1/2 aspect-square flex flex-col justify-center">
            <Button next={true} content=">"/>
          </div>
        </div>
      </div>
    </div>
  )
}

function Card() {
  return (
    <div className="card-container relative h-full aspect-square">
      {
        list.map((item, index) => (
          <CardChild props={{
            ...item,
            index: index,
            maxIndex: list.length,
          }} />
        ))
      }
    </div>
  )
}

function nextCalc(next: number, maxZ: number) {

  let factor = ((next: number) => {
    let result = 0;
    let a = 1;
    for (let i = 0; i < Math.abs(next); i++) {
      result = result + a;
      a = a / 2;
    }

    return result;
  })(next);

  let z = maxZ - next;
  let translateX = (4 * factor);
  let scale = (1 - (0.1 * factor)); 
  let opa = ((1 / maxZ) * z);
 
  if (next < 0 ) {
    z = maxZ + next;
    translateX = -(translateX);
    opa = ((1 / maxZ) * z);
  }
  
  // console.log(translateX)
  return [
    z,
    translateX.toFixed(2),
    scale.toFixed(2),
    opa.toFixed(2),
  ]
}

function CardChild({props}: Record<string, any>) {
  const { selectedIndex, disPatch, setViewMode, viewMode } = useContext(AppContext);
  const next = props.index - selectedIndex;
  const nextStyle = useMemo(() => (nextCalc(next, props.maxIndex)), [next, props.maxIndex]);

  const cardStyles = useMemo(() => ({
    transform: `translateX(${nextStyle[1]}rem) scale(${nextStyle[2]})`,
    zIndex: nextStyle[0],
    opacity: nextStyle[3],
  }), [nextStyle]);
  const cardStylesFlexing = useMemo(() => ({
    transform: `scale(0.8) translateX(${110 * props.index}%)`,
    zIndex: nextStyle[0],
    boxShadow: "none",
    opacity: 1,
  }), [props.index, nextStyle]);
  const [dynamicStyle, setdynamicStyle] = useState({ ...cardStylesFlexing } as object);

  useEffect(() => {
    if (viewMode) setdynamicStyle({ ...cardStyles });
    else {
      setTimeout(() => setdynamicStyle({ ...cardStylesFlexing }),
      1000);
    }
  }, [viewMode, cardStyles, cardStylesFlexing])

  return (
    <div
    className={`card-bg card-${props.index}`}
    style={{
      ...dynamicStyle,
      backgroundImage: `url(${list[props.index].bg})`,
    }}
    onClick={() => {
      setViewMode(true)
      disPatch({ type: "SELECT", payload: props.index})
    }}
    >
      <div className="card-info only-view-mode" style={selectedIndex !== props.index ? {
        opacity: 0,
      } : {}}>
          <div className="top">
            <div
            className="avt"
            style={ { backgroundImage: `url(${list[props.index].avatar})`, } }
            ></div>
            <p>@{props.author || 'unknown'}</p>
          </div>
          <div className="bot">
            <p>
            {
              props.slogan ||
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure velit dolorum non minima nesciunt, quam obcaecati, consequatur aspernatur ratione aliquam mollitia omnis, unde ipsam libero cupiditate. Vel et distinctio aspernatur?'
            }
            </p>
          </div>
      </div>
    </div>
  )
}