import React from 'react'
import './styles.scss'

export default (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
