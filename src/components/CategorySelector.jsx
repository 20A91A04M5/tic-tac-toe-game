// import { useState } from "react";

// const emojiCategories = {
//   Animals: ['🐶', '🐱', '🐰', '🐵'],
//   Food: ['🍕', '🍔', '🍩', '🍟'],
//   Sports: ['⚽', '🏀', '🏈', '🎾'],
// };

// const CategorySelector = ({ setCategories, startGame }) => {
//   const [selected, setSelected] = useState({ player1: '', player2: '' });

//   const handleStart = () => {
//     if (selected.player1 && selected.player2 && selected.player1 !== selected.player2) {
//       setCategories({
//         player1: emojiCategories[selected.player1],
//         player2: emojiCategories[selected.player2],
//       });
//       startGame();
//     }
//   };

//   return (
//     <div className="selector">
//       <h5>Select Emoji Categories</h5>
//       <div className="row mb-3">
//         {['player1', 'player2'].map((player, i) => (
//           <div className="col" key={player}>
//             <label>{player.toUpperCase()}</label>
//             <select
//               className="form-select"
//               onChange={(e) => setSelected({ ...selected, [player]: e.target.value })}
//             >
//               <option value="">-- Select --</option>
//               {Object.keys(emojiCategories).map(cat => (
//                 <option key={cat} value={cat}>{cat}</option>
//               ))}
//             </select>
//           </div>
//         ))}
//       </div>
//       <button className="btn btn-success" onClick={handleStart}>Start Game</button>
//     </div>
//   );
// };

// export default CategorySelector;




import { useState } from "react";
import './CategorySelector.css';

const emojiCategories = {
  Animals: ['🐶', '🐱', '🐰', '🐵'],
  Food: ['🍕', '🍔', '🍩', '🍟'],
  Sports: ['⚽', '🏀', '🏈', '🎾'],
};

const CategorySelector = ({ setCategories, startGame }) => {
  const [selected, setSelected] = useState({ player1: '', player2: '' });
  const [showVS, setShowVS] = useState(false);

  const handleStart = () => {
    if (
      selected.player1 &&
      selected.player2 &&
      selected.player1 !== selected.player2
    ) {
      setShowVS(true);

      setTimeout(() => {
        setCategories({
          player1: emojiCategories[selected.player1],
          player2: emojiCategories[selected.player2],
        });
        startGame();
      }, 2500); // wait for VS animation
    }
  };

  return (
    <div className="selector-container text-center">
      {!showVS ? (
        <>
          <h2 className="selector-title">🚀 Choose Your Emoji Category</h2>
          <div className="row justify-content-center mb-4">
            {['player1', 'player2'].map((player, i) => (
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
            Start Game
          </button>
        </>
      ) : (
    //     <div className="vs-animation">
    //       <h1>
    //         <span className="emoji-slide">
    //           {selected.player1} ({emojiCategories[selected.player1][0]})
    //         </span>{" "}
    //         <span className="vs-text">VS</span>{" "}
    //         <span className="emoji-slide">
    //           {selected.player2} ({emojiCategories[selected.player2][0]})
    //         </span>
    //       </h1>
    //     </div>
    //   )}
    // </div>
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
}
export default CategorySelector;
