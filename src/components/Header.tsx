import React, { useContext } from 'react'
import "../App.scss"
import "./Header.css"
import { AppContext } from '../App'

export default function Header() {
  const { play } = useContext(AppContext);
  return (
    <header className={`header ${play? "translate-y-[-120%]" : null}`}></header>
  )
}