import React, {useState} from 'react';
import {view} from "../../actions/user";
import "./view.css"
import {NavLink} from "react-router-dom";
import { logout } from "../../reducers/userReducer";
import { useDispatch } from "react-redux";


const View = () => {
    const dispatch = useDispatch();
    const [contentLoaded, setContentLoaded] = useState(false);
    const [games, setGames] = useState([]);
    let index = 0;

    if (!contentLoaded) {
        setContentLoaded(true);
        view().then(games => {
            console.log(games)
            setGames(games);
        })
    }

    const IncreaseIndex = () => index++;
    

    return (
        <div>

        
        <body>
            <ol class ="gamesList">
            <h1>Список игр</h1>
            {games.map((game) => (

                <div class = "game" key={index}> 

                            <NavLink to={`/info?id=${index}`} style={{ textDecoration: 'none'  }} class = "link">
                                <li name={IncreaseIndex()}  > {game.name}  </li>    
                            </NavLink>
                                            
                </div>       
            )
            )}
            </ol>
        </body>
    </div>

    );
};

export default View;
