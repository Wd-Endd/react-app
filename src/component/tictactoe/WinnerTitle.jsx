import React, { useContext } from 'react'
import { GameContext } from './Game'

export default function WinnerTitle() {
  const { state } = useContext(GameContext);
  return (
    <div className={`winner-title ${!state.winner? "hidden" : ""}`}>
      {state.winner} is won
    </div>
  )
}
