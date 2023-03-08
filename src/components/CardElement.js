import React from 'react'

export default function 
(props) {
  return (
    <div id={props.card.id} className={`card ${props.card.flipped ? "flip" : ""}`} onClick={() => {props.handleFlip(props.card)}}>
        <div className='card_front'>
            <img src={`./assets/images/${props.card.icon}.png`} alt={props.card.icon}/>
        </div>
        <div className='card_back'>
            {"</>"}
        </div>
    </div>
  )
}
