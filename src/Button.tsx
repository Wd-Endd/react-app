import React, { useContext } from 'react';
import './App.scss';
import { AppContext } from './App';

export default function Button(props: Record<string, any>) {
  const { disPatch } = useContext(AppContext);
  return (
    <button
    className="!w-full !aspect-square !z-50 !text-7xl"
    onClick={() => {
      disPatch(props.next? "NEXT" : "PREV");
    }}>
      {props.content || null}
    </button>
  )
}