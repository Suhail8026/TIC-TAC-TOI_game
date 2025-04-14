Tic Tac Toe Game – Project Description
This is a simple Tic Tac Toe game built using HTML, CSS, and JavaScript. It allows two players to take turns and play the classic 3x3 game in the browser.

Technologies Used
HTML – for structure

CSS – for styling (style.css)

JavaScript – for game logic and interactivity (script.js)

HTML (Structure)
The HTML file provides the layout of the game:

Title: Displays "Tic Tac Toe" as the heading.

Game Board: A 3x3 grid of <button> elements representing the game cells.

Result Message:

A hidden message area (<p id="msg">) shows the winner or a draw.

Control Buttons:

Restart Game: Resets the current game.

New Game: Also resets the board for a new match.

Each button in the grid calls the fun(index) function on click, passing its index (0–8) for processing in JavaScript.

CSS (Styling)
The visual layout is handled using CSS :

Buttons styled to form a square grid.

Layout likely uses grid or flexbox for alignment.

.hide class hides the result message until needed.

A clean, simple look makes the game easy to play and understand.

JavaScript (Game Logic)
The JavaScript (linked through script.js) manages the following:

Player Turns: Alternates between "X" and "O".

Game State: Tracks moves .

Win Check: Detects if a player has won the game by checking all possible win conditions.

Draw Detection: Shows a message if all cells are filled without a winner.

Reset Functions:

resetgame() clears the board for a replay.

game() starts a new game (same functionality here).

When a player wins or the game ends in a draw, the result is shown in the message container.

Features
Interactive 2-player mode.

Clear display of winner or draw.

Easy-to-use restart and new game options.

Responsive and visually simple layout.