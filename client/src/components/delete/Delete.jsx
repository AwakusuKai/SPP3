import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {deletePost, info} from "../../actions/user";
import "./delete.css"

const Delete = () => {
    const [contentLoaded, setContentLoaded] = useState(false);
    let [game, setGame] = useState([])

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
            setGame(game);
        })
    }
    return (
        <div className="detele_form">
            <form encType="multipart/form-data">
            <h1 className="title">{game.name}</h1> 
                <NavLink to={`/view`}>
                    <button type="submit" onClick={(event) => deletePost(event, gameId)} >Delete</button>
                </NavLink>
            </form>
        </div>
    );
};

export default Delete;
