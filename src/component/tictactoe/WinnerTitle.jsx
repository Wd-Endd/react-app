import React, { useContext } from 'react'
import { GameContext } from './Game'

export default function WinnerTitle() {
  const { winner } = useContext(GameContext);
  return (
    <div className={`winner-title ${!winner? "hidden" : ""}`}>
      {winner} is won
    </div>
  )
}
