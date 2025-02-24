import React, { useContext } from 'react';
import '../App.scss';
import { AppContext, indexAction } from '../App';
import list from "../API";

export default function Button(props: Record<string, any>) {
  const { disPatch, selectedIndex, /* play */ } = useContext(AppContext);

  if ((!props.next && selectedIndex === 0) || (props.next && selectedIndex === list.length - 1)) {

    return null;
  }

  return (
    <button
    className="w-full aspect-square z-50 text-7xl text-white active:translate-y-1.5"
    onClick={() => {
      disPatch(props.next? { type: "NEXT" } as indexAction : { type: "PREV" } as indexAction );
    }}>
      {props.content || null}
    </button>
  );
}