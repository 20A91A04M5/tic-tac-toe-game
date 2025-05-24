
import { useState } from "react";
import './CategorySelector.css';
import Swal from 'sweetalert2';

const emojiCategories = {
  Animals: ['🐶', '🐱', '🐰', '🐵', '🦁', '🐯','🫎','🫏'],
  Food: ['🍕', '🍔', '🍩', '🍟', '🌮', '🥞','🍇','🍓'],
  Sports: ['⚽', '🏀', '🏈', '🥎', '🎾', '🏓','🏏','🏑','🎳'],
  Love: ['❤️', '💙', '💝', '❤️‍🔥', '💕', '💘','💓','💗'],
  Angry: ['😡', '😤', '🤬', '😠', '👿', '😾','😈','🤯'],
};

const CategorySelector = ({ setCategories, startGame }) => {
  const [selected, setSelected] = useState({ player1: '', player2: '' });
  const [showVS, setShowVS] = useState(false);

  const handleStart = () => {
    if (!selected.player1 || !selected.player2) {
      Swal.fire('😭 Please select a category for both players.');
      return;
    }

    if (selected.player1 === selected.player2) {
      Swal.fire('😱 Choose different categories for both players!');
      return;
    }

    setShowVS(true);

    setTimeout(() => {
      setCategories({
        player1: emojiCategories[selected.player1],
        player2: emojiCategories[selected.player2],
      });
      startGame();
    }, 2500);
  };

  return (
    <div className="selector-container text-center">
      {!showVS ? (
        <>
          <h2 className="selector-title"> Choose Your Emoji Category 🫣</h2>
          <div className="row justify-content-center mb-4">
            {['player1', 'player2'].map((player) => (
              <div className="col-md-4 col-10 mb-3" key={player}>
                <label className="form-label text-light fs-5">{player.toUpperCase()}</label>
                <select
                  className="form-select"
                  value={selected[player]}
                  onChange={(e) =>
                    setSelected({ ...selected, [player]: e.target.value })
                  }
                >
                  <option value="">-- Select --</option>
                  {Object.keys(emojiCategories).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <button
            className="btn btn-primary px-4 py-2 fw-bold fs-5"
            onClick={handleStart}
          >
            Start Game 🚀
          </button>
        </>
      ) : (
        <div className="vs-animation-container">
          <div className="fighter left">
            <div className="name">{selected.player1}</div>
            <div className="emoji">{emojiCategories[selected.player1][0]}</div>
          </div>

          <div className="vs-glow">
            <span className="vs-text">VS</span>
          </div>

          <div className="fighter right">
            <div className="name">{selected.player2}</div>
            <div className="emoji">{emojiCategories[selected.player2][0]}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySelector;



