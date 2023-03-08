import './MemoryGame.css';
import GameOver from './components/GameOver';
import GameBoard from './components/GameBoard';
import { useEffect, useState } from 'react';
import game from "./game/game";

function MemoryGame() {

  const [gameOver , setGameOver] = useState(false);
  const [cards , setCards] = useState([]);

  useEffect(() => {
      setCards(game.createCardsFromTechs());
  } , [])

  const restartGame = () => {
      game.clearCards();
      setCards(game.createCardsFromTechs());
      setGameOver(false);
  } 

  const handleFlip = (card) => {
    if (game.setCard(card.id)) {

      if (game.secondCard) {
          if (game.checkMatch()) {
              game.clearCards();
              if(game.checkGameOver()) {
                // Game Over
                setGameOver(true);
              }
          } else {
              setTimeout(() => {
                  // No match
                  game.unflipCards();
                  setCards([...game.cards])
              }, 1000);

          };
       }
    }

    setCards([...game.cards])
  }

  return (
    <div className="App">
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} restart={restartGame}></GameOver>
    </div>
  );
}

export default MemoryGame;
