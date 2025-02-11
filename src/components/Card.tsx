import React, { useContext } from 'react'
import "./Card.scss"
import list from "../API"
import { AppContext } from "../App"

interface Var extends React.CSSProperties {
  '--avt'?: string,
  '--bg'?: string,
}

export default function Card() {
  return (
    <div className="card-container !relative !h-full !aspect-square">
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
  const { selectedIndex, disPatch, setPlay } = useContext(AppContext);
  const next = props.index - selectedIndex;
  const nextStyle = nextCalc(next, props.maxIndex);
  // console.log(selectedIndex, props.index);
  return (
    <div
    className={`card-bg !absolute`}
    style={{
      // '--max-z': props.maxIndex + 1,
      // '--next': props.index - selectedIndex,
      transform: `translateX(${nextStyle[1]}rem) scale(${nextStyle[2]})`,
      zIndex: nextStyle[0],
      opacity: nextStyle[3],
      '--bg': `url(${
        props.bg || 
        "https://wallpapers.com/images/high/anime-date-a-live-gentle-origami-two3nxnbwpr2ihdk.webp"
      })`
    } as Var}
    onClick={() => {
      setPlay(true)
      disPatch({ type: "SELECT", payload: props.index})
    }}
    >
      <div className="card-info" style={selectedIndex !== props.index ? {
        opacity: 0,
      } : {}}>
          <div className="top">
            <div
            className="avt"
            style={{
              '--avt': `url(${props.avatar ||
                'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474092Pvt/anh-avatar-chill-lofi-cuc-dep_021443523.jpg'
              })`,
            } as Var}
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