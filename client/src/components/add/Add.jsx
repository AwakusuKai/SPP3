import React, {useState} from 'react';
import Input from "../utils/input/Input";
import {add} from "../../actions/user";
import "./add.css"
import {NavLink} from "react-router-dom";

const Add = () => {
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [developer, setDeveloper] = useState("")
    const [description, setDescription] = useState("")
    const [gameHours, setGameHours] = useState("")

    return (
        <div>
            <header>
            <div className="header_title">
                <NavLink to="/view"><h1 class = "headerName">My Games List</h1></NavLink>
            </div> 
            <div class = "headerButtonsList">
                <NavLink to="/add"><button type="button">Добавить</button></NavLink>
                <NavLink to="/view"><button type="button">Просмотр</button></NavLink>
            </div>
            </header>





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
        
                
                <button type="submit" onClick={(event) =>  add(event, name, genre, developer, description, gameHours)} ><NavLink to={"/view"} style={{ textDecoration: 'none'  }} class = "link">Добавить</NavLink></button>
                
            
            </form>


                
        </div>
    );
};

export default Add;