import React, { useContext } from 'react'
import { AppContext } from "../App"

export default function FullToggle() {
  const { /* play, */ setPlay } = useContext(AppContext);
  return (
    // play? (
      <button
      className="!z-50 !text-white !text-4xl !fixed !left-14 !top-14"
      onClick={() => {
        setPlay(false)
      }}
      >X</button>
    // ) : null
  )
}