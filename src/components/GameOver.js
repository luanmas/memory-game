import React, { Fragment } from 'react'

import StatusScore from './StatusScore'

const GameOver = (props) => {
  return (props.show ?
    <div id="gameOver">
        <div>
            Parabéns, você completou o jogo!
        </div>
        <button id="restart" onClick={props.restart}>Jogue novamente</button>
        <StatusScore rank={props.rank} moves={props.moves}></StatusScore>
    </div> : <Fragment />
  )
}

export default GameOver