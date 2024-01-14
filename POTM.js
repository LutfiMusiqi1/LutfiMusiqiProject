document.addEventListener('DOMContentLoaded', function () {
    const players = [
        { name: 'Player 1', image: 'player1.jpg', achievements: 'Achievements and highlights.' },
        { name: 'Player 2', image: 'player2.jpg', achievements: 'Achievements and highlights.' },
        // Add more players as needed
    ];

    displayCurrentPlayer(players[0]);

    const votingForm = document.getElementById('voteForm');
    players.forEach((player, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'player';
        input.id = `player${index + 1}`;
        input.value = player.name;
        input.required = true;

        const label = document.createElement('label');
        label.htmlFor = `player${index + 1}`;
        label.textContent = player.name;

        votingForm.appendChild(input);
        votingForm.appendChild(label);
    });

    votingForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const selectedPlayer = document.querySelector('input[name="player"]:checked');
        if (selectedPlayer) {
            const playerIndex = players.findIndex(player => player.name === selectedPlayer.value);
            if (playerIndex !== -1) {
                displayCurrentPlayer(players[playerIndex]);
            }
        }
    });

    // function displayCurrentPlayer(player) {
    //     const currentPlayerDiv = document.querySelector('.current-player');
    //     currentPlayerDiv.innerHTML = `
    //         <h3>Current Player of the Month</h3>
    //         <div class="card">
    //             <img src="${player.image}" class="card-img-top" alt="${player.name}">
    //             <div class="card-body">
    //                 <h5 class="card-title">${player.name}</h5>
    //                 <p class="card-text">${player.achievements}</p>
    //             </div>
    //         </div>
    //     `;
    // }
});
