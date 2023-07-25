const gameListNav = document.getElementById("game-list-nav");
const gameDetailImg = document.getElementById("detail-image");
const gameDetailTitle = document.getElementById("detail-title");
const gameDetailHighScore = document.getElementById("detail-high-score");
const highScoreForm = document.getElementById('high-score-form')
const scoreInput = document.getElementById('score-input')
const url = "http://localhost:3000/games"

fetch(url)
  .then((response) => response.json())
  .then((gamesArray) => {
    renderGameNameAndManufacturer(gamesArray);
    renderGameDetail(gamesArray, 0);
  });

//The user should be able to enter a high score in the form on the right side 
// have it show that value for "high score".
highScoreForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    gameDetailHighScore.innerText = scoreInput.value
})

function renderGameDetail(gamesArray, index) {
  gameDetailImg.src = gamesArray[index]["image"];
  gameDetailTitle.innerText = gamesArray[index]["name"];
  gameDetailHighScore.innerText = gamesArray[index]["high_score"];
}

function renderGameNameAndManufacturer(gamesArray) {
  for (let game in gamesArray) {
    let gameH5 = document.createElement("h5");
    gameH5.innerText = `${gamesArray[game]["name"]} (${gamesArray[game]["manufacturer_name"]})`;
    gameListNav.appendChild(gameH5);
    gameH5.addEventListener("click", () => {
      renderGameDetail(gamesArray, game);
    });
  }
}
