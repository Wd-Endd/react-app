import React, { useContext } from 'react'
import "../App.scss"
import "./Header.scss"
import { AppContext } from '../App'

export default function Header() {
  const { viewMode } = useContext(AppContext);
  return (
    <header className={`header ${viewMode? "translate-y-[-120%]" : null}`}></header>
  )
}