class GameModel {
    constructor(name, genre, developer, description, gameHours) {
        this.name = name;
        this.genre = genre;
        this.developer = developer;
        this.description = description;
        this.gameHours = gameHours;
    }
}

module.exports = GameModel;