const GameModel = require("./GameModel");


class Game {
    id = 0;
    games= [];

    increaseID() {
        this.id++;
    }

    initGames() {
        this.newGame(
            'Cyberpunk 2077',
            'Action RPG', 
            'CDPR', 
            'Описание', 
            300
        );
        this.newGame(
            'The Wicher 3', 
            'Action RPG', 
            'CDPR', 
            'Описание', 
            158
        )
    }

    selectedGameId = -1;

    getID() {
        return this.id
    }

    newGame(name, genre, developer, description, gameHours) { //добавление новой игры
        this.increaseID();
        let game = new GameModel(name, genre, developer, description, gameHours)
        this.games.push(game);
       // console.log(car.file);
    }

    getGames() {  // получить список игр
        return this.games;
    }

    selectGameID(id) {
        this.selectedGameId = this.games[id] ? id : -1;
    }

    getGameByID(id) {
        return this.games[id];
    }
 
    editGameByID(id, name, genre, developer, description, gameHours) {
        let selectedGame = this.games[id];
        selectedGame.name = name;
        selectedGame.genre = genre;
        selectedGame.developer = developer;
        selectedGame.description = description;
        selectedGame.gameHours = gameHours;
       
        this.games[id] = selectedGame;
        this.increaseID();
    }

    deleteGameByID(id) {
        this.games.splice(id, 1);
    }
}

module.exports = Game
