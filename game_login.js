function addUser(){
    player1Name = document.getElementById("player1NameInput").value;
    player2Name = document.getElementById("player2NameInput").value;
    localStorage.setItem("jogador 1", player1Name);
    localStorage.setItem("jogador 2", player2Name);
    window.location = "game_page.html";
}