import React, { useContext } from 'react'
import { AppContext } from "../App"

export default function FullToggle() {
  const { /* play, */ setViewMode } = useContext(AppContext);
  return (
    // play? (
      <button
      className="view-mode-only !z-50 !text-white !text-4xl !fixed !left-14 !top-14"
      onClick={() => {
        setViewMode(false)
      }}
      >X</button>
    // ) : null
  )
}