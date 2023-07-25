



const gameListNav = document.getElementById('game-list-nav')
const gameDetailImg = document.getElementById('detail-image')
const gameDetailTitle = document.getElementById('detail-title')
const gameDetailHighScore = document.getElementById('detail-high-score')


const url = "http://localhost:3000/games"


fetch(url)
.then(response => response.json())
.then(gamesArray => {
    renderGameNameAndManufacturer(gamesArray)
    renderGameDetail(gamesArray, 0)   
})



function renderGameDetail(gamesArray, index){
    gameDetailImg.src = gamesArray[index]["image"]
    gameDetailTitle.innerText = gamesArray[index]["name"]
    gameDetailHighScore.innerText = gamesArray[index]["high_score"]
}


function renderGameNameAndManufacturer(gamesArray){
    for(let game in gamesArray){
        let gameH5 = document.createElement('h5')
        gameH5.innerText = `${gamesArray[game]["name"]} (${gamesArray[game]["manufacturer_name"]})`
        gameListNav.appendChild(gameH5)
        gameH5.addEventListener("click", ()=>{
            renderGameDetail(gamesArray, game)
        }
        )
    }
}