# ❌⭕ Tic-Tac-Toe (XO Game)

A web-based **Tic-Tac-Toe (XO)** game created using **HTML5**, **CSS3**, and **Vanilla JavaScript**. The application enables two players to play locally on the same device, highlighting winning combinations and managing dynamic turn states[cite: 18, 19].

---

## 📸 Features

* **Turn Management:** Automatically alternates player turns between 'X' and 'O'.
* **Win Condition Logic:** Checks all 8 possible winning combinations (rows, columns, and diagonals) after every valid move.
* **Winning Line Highlight:** Applies visual dynamic styling to the winning triplet of squares upon round conclusion.
* **Auto-Reload:** Animates the winner status banner and reloads the browser window automatically after 4 seconds to start a new match[cite: 19].
* **Square Validation:** Restricts plays on already occupied squares and provides inline notifications[cite: 19].

---

## 🛠️ Built With

* **HTML5** - Document layout and grid container setup.
* **CSS3** - Responsive CSS Grid layout, hover animations, and dynamic state colors[cite: 18, 20].
* **Vanilla JavaScript** - Game logic, array indexing, conditional check operations, and DOM manipulation[cite: 18, 19].

---

## 📁 Project Structure

```text
.
├── index.html          # Game title header and 3x3 grid container layout[cite: 18]
├── scripts.js          # Player logic, win conditions, DOM interactions, and timers[cite: 19]
└── styles.css          # Color scheme, CSS grid settings, and winner class modifiers[cite: 20]