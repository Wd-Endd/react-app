import React from 'react'
import "./Card.scss"
import list from "./api.js"

interface Var extends React.CSSProperties {
  '--avt'?: string,
  '--bg'?: string,
}

export default function Card() {
  return (
    <div className="card-container">
      {
        list.map((item, index) => (
          <CardChild props={{
            ...item,
            index: index,
          }} />
        ))
      }
    </div>
  )
}

function CardChild({props}: Record<string, any>) {
  return (
    <div
    className="card-bg"
    style={{
      '--bg': `url(${props.bg || 
        "https://wallpapers.com/images/high/anime-date-a-live-gentle-origami-two3nxnbwpr2ihdk.webp"
      })`
    } as Var}
    >
      <div className="card-info">
         <div className="top">
          <div
          className="avt"
          style={{
            '--avt': `url(${props.avatar ||
              'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474092Pvt/anh-avatar-chill-lofi-cuc-dep_021443523.jpg'
            })`
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