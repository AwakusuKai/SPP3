import React, {useState} from 'react';
import {info} from "../../actions/user";
import "./info.css"
import {NavLink} from "react-router-dom";

const Info = () => {

    const [contentLoaded, setContentLoaded] = useState(false);
    
    let [game, setGame] = useState([])
    
    function getParam( name ) {
        let regexS = "[\\?&]"+name+"=([^&#]*)";
        let regex = new RegExp( regexS );
        let results = regex.exec( window.location.href );
        if( results == null )
            return "1";
        else
            return results[1];
    }
    let gameId = getParam( 'id' );

    if (!contentLoaded) {
        setContentLoaded(true);
        info(gameId).then(game => {
            setGame(game);
        })
    }


    /*if (!contentLoaded) {
        setContentLoaded(true);

        info(gameId).then(game => {
            setName(game.name);
            setGenre(game.genre);
            setDeveloper(game.developer);
            setDescription(game.description);
            setGameHours(game.gameHours)
            
        })

    }*/

    return (
        <div>
            <header>
                <div className="header_title">
                    <NavLink to="/view"><h1 class = "headerName">My Games List</h1></NavLink>
                </div> 
                <div class = "headerButtonsList">
                    <NavLink to={`/delete?id=${gameId}`}><button type="button">Удалить</button></NavLink>
                    <NavLink to={`/edit?id=${gameId}`}><button type="button">Изменить</button></NavLink>
                </div>
            </header>
            <body>
                <div class="gameInfo"> 
                    <h1 class="Name">{game.name} </h1> 
                    <p><strong>Жанр: </strong>{game.genre} </p>
                    <p><strong>Разработчик: </strong>{game.developer} </p>
                    <p><strong>Описание: </strong>{game.description} </p>
                    <p><strong>Время в игре: </strong>{game.gameHours} часов </p>
                </div>
            </body>
        </div>
    );
};

export default Info;