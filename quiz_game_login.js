function adduser()
{

    player_1_name = document.getElementById("playername1_input").value;
    player_2_name = document.getElementById("playername2_input").value;

    localStorage.setItem("player1_name", player_1_name);
    localStorage.setItem("player2_name", player_2_name);

    window.location = "quiz_game_login.html";
}