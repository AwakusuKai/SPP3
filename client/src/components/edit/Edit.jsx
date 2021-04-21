import React, {useState} from 'react';
import {info, editPost} from "../../actions/user";
import Input from "../utils/input/Input";
import "./edit.css"
import {NavLink} from "react-router-dom";

const Edit = () => {
    const [contentLoaded, setContentLoaded] = useState(false);
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [developer, setDeveloper] = useState("")
    const [description, setDescription] = useState("")
    const [gameHours, setGameHours] = useState("")

    function getParam( name ) {
        let regexS = "[\\?&]"+name+"=([^&#]*)";
        let regex = new RegExp( regexS );
        let results = regex.exec( window.location.href );
        if( results == null )
            return "";
        else
            return results[1];
    }
    let gameId = getParam( 'id' );

    
    if (!contentLoaded) {
        setContentLoaded(true);
        
        info(gameId).then(game => {
            setName(game.name);
            setGenre(game.genre);
            setDeveloper(game.developer);
            setDescription(game.description);
            setGameHours(game.gameHours);
            
        })
    }

    return (
        <div>
            <form className="form" encType="multipart/form-data" action="/add" method="post">
                <h1>Добавить игру</h1>
                <div>
                    <Input value={name} setValue={setName} type="text" placeholder="Название" required/>
                </div>
                <div >
                    <Input value={genre} setValue={setGenre} type="text" placeholder="Жанр" required/>
                </div>
                <div >
                    <Input value={developer} setValue={setDeveloper} type="text" placeholder="Разработчик" required/>
                </div>
                <div >
                    <Input  value={description} setValue={setDescription} type="text" placeholder="Описание" required/>
                </div>
                <div>
                    <Input  value={gameHours} setValue={setGameHours} type="number" placeholder="Время в игре" required/>
                </div>
        
                <button type="button" onClick={(event) => editPost(event, gameId, name, genre, developer, description, gameHours)} > <NavLink to={"/view"} style={{ textDecoration: 'none'  }} class = "link">Изменить</NavLink></button>
            
            </form>

            
        </div>
        
    );
};

export default Edit;
