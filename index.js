// let playerDetails = [
//     {
//         name: `${playerName}`,
//         position: `${position}`
//     }
// ]

const goalKeeper = () =>{
    let playerName = document.getElementById('player-name').value;
    let playerPosition = document.getElementById('select-player').value;
    console.log(playerName, playerPosition);
    
    let player = document.createElement("div")
    player.classList.add("player")

    player.innerHTML = `
        <h1 class="">${playerPosition}</h1>
        <div class="player-img"><img src="./images/shirt.png" alt="" width="100%"></div>
        <h6 class="">${playerName}</h6>
    `


    console.log(player);

    if (playerPosition == 1) {
        player.classList.add("ply1")
        console.log(player);
        
    } else if (playerPosition == 2) {
        player.classList.add("ply5")
        console.log(player);
        
    } else if (playerPosition == 3) {
        player.classList.add("ply3")
        console.log(player);
        
    } else if (playerPosition == 4) {
        player.classList.add("ply4")
        console.log(player);
        
    } else if (playerPosition == 5) {
        player.classList.add("ply2")
        console.log(player);
        
    } else if (playerPosition == 6) {
        player.classList.add("ply8")
        console.log(player);
        
    } else if (playerPosition == 7) {
        player.classList.add("ply6")
        console.log(player);
        
    } else if (playerPosition == 8) {
        player.classList.add("ply7")
        console.log(player);
        
    } else if (playerPosition == 9) {
        player.classList.add("ply10")
        console.log(player);
        
    } else if (playerPosition == 10) {
        player.classList.add("ply11")
        console.log(player);
        
    } else if (playerPosition == 11) {
        player.classList.add("ply9")
        console.log(player);
    }

    const allPlayers = document.querySelector(".all-players")
    allPlayers.appendChild(player)
    
    document.querySelector("form").reset()
}
