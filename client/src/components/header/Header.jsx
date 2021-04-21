import React from 'react';
import {NavLink} from "react-router-dom";
import "./header.css"
import { logout } from "../../reducers/userReducer";
import { useDispatch } from "react-redux";


const Header = (props) => {
    const dispatch = useDispatch();
    return (
        <header>
            <div className="header_title">
                <NavLink to="/view"><h1 class = "headerName">My Games List</h1></NavLink>
            </div> 
            <div class = "headerButtonsList">
                {props.isAuth && (<NavLink to="/add"><button type="button">Добавить</button></NavLink>)}
                {props.isAuth && (<NavLink to="/view"><button type="button">Просмотр</button></NavLink>)}
                {!props.isAuth && (<NavLink to="/login"><button type="button">Войти</button></NavLink>)}
                {!props.isAuth && (<NavLink to="/registration"><button type="button">Регистрация</button></NavLink>)}
                {props.isAuth && (<NavLink to="/"><button type="button">Выйти</button></NavLink>)}
            </div>
            {props.isAuth && (
                    <div className="headerButtonsList" onClick={() => dispatch(logout())}>
                        <NavLink to="/"><button type="button">Выйти</button></NavLink>
                    </div>
            )}
            
            
        </header>
    );
};

export default Header;
