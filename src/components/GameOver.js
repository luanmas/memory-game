import React, { Fragment } from 'react'

const GameOver = (props) => {
  return (props.show ?
    <div id="gameOver">
        <div>
            Parabéns, você completou o jogo!
        </div>
        <button id="restart" onClick={props.restart}>Jogue novamente</button>
    </div> : <Fragment />
  )
}

export default GameOver