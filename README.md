# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


🎮 Emotrix — The Emoji Tic Tac Toe Game :-
Welcome to Emotrix, a fun twist on the classic Tic Tac Toe game using emojis instead of X's and O's! Whether you want to challenge a friend or face off against the AI, this colorful and interactive game blends strategy with emotion-themed fun.

🌟 Features
✅ Category Selection with Emojis
Players choose from emoji categories like 🐶 Animals, 🍕 Food, ⚽ Sports, ❤️ Love, and 😡 Angry.
Each player gets a unique set of emojis from their selected category.
✅ Two Modes of Play
👥 Player vs Player — Two human players compete using different emoji sets.
✅ Dynamic Emoji Placement Rules
Each player can have only 3 emojis on the board at a time.
When a player places a 4th emoji, the oldest emoji vanishes, keeping the game challenging.
✅ Victory Conditions
Win the game by aligning 3 emojis in a row (horizontal, vertical, or diagonal).
The winning cells are visually highlighted, and a celebration animation with confetti is triggered.
✅ Score Tracking
Scores are tracked for both players throughout the game.
The scoreboard shows:
Player 1 (❤️ Love) — 2
Player 2 (🐶 Animals) — 1
✅ Interactive Winner Popup
After a win, a popup shows:
The winner's  category
The exact 3 emojis that formed the winning line
✅ Sound Effects & Mute Control
🎵 Sounds play:
When placing emojis
On victory
On back navigation
🔇 Mute/Unmute button allows players to toggle game sounds.
✅ Responsive UI Design
📱 Fully responsive:
On large/medium screens: game board on the left, scoreboard on the right (60%/40% layout)
On small screens: scoreboard stacks below the game
✅ Smart Emoji Placement
Ensures no duplicate emojis appear on the board at the same time.
🎮 How to Play
Choose Your Categories
Each player selects a unique emoji category from the dropdown.
Start the Game
Click "Start Game" after choosing your categories.
Make Your Moves
Click on any empty cell to place a random emoji from your selected category.
Only 3 emojis per player are allowed at once.
Once 3 emojis are placed, the oldest one disappears on the 4th move.
Win the Game
Align 3 of your emojis in a row to win.
The game highlights the winning cells and shows a celebratory animation and emojis used.
View Scores or Play Again
See your total wins in the scoreboard.
Click "Back" to choose new categories and start over.
🛠️ Tech Stack
Frontend: React.js
Styling: CSS3, Bootstrap
Animations: Lottie Files, Confetti.js
Audio: HTML5 Audio API
Alerts: SweetAlert2 (for game popups and warnings)
🧠 Additional Notes
Prevents players from selecting the same category.
Automatically warns if you try to start the game without selecting categories.
Clean, modular code using React components like Board, Cell, and CategorySelector.

🧑‍💻 Author
Made with ❤️ by [ L TIRUMALAPRASAD ]
Fun meets logic in this emotional twist of classic Tic Tac Toe.

Failed to upload "emotrix.mp4" 
