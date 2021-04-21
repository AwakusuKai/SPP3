const Router = require("express");
const config = require("config")
const GameModel = require("../model/game")
const game = new GameModel();
game.initGames();
const router = new Router()


const workingDir = __dirname.slice(0, __dirname.lastIndexOf('\\'))

router.post('/add',
    async (req, res) => {
        try {
            console.log(req.body)
            game.newGame(req.body.name, req.body.genre, req.body.developer, req.body.description, req.body.gameHours);

            
            return res.status(200).json({message: `User ok`})
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.get('/view',
    async (req, res) => {
        try {
            return res.status(200).json({games: game.getGames()})
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })


    
router.get('/info',
    async (req, res) => {
        try {
            const gameId = req.headers.gameid;
            const infoGame = game.getGameByID(gameId)
            console.log(req.headers.gameid);
            return res.status(200).json({game: infoGame})
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.post('/edit',
    async (req, res) => {
        try {
            
            console.log(req.body);

            game.editGameByID(req.body.gameId, req.body.name, req.body.genre, req.body.developer, req.body.description, req.body.gameHours);

            return res.status(200).json({message: `User ok`})
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.post('/delete',
    async (req, res) => {
        try {
            const gameId = req.body.gameId;

            game.deleteGameByID(gameId)

            return res.status(200).json({message: `User ok`})
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })



module.exports = router
