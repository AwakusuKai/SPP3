import axios from 'axios'
import {API_URL} from "../config";
import { setUser } from "../reducers/userReducer";

export const add = async (event, name, genre, developer, description, gameHours) => {
    event.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('genre', genre);
    data.append('developer', developer);
    data.append('description', description);
    data.append('gameHours', gameHours);
    await axios.post(`${API_URL}games/add`, data, {});
}

export const view = async () => {
    
    return (await axios.get(`${API_URL}games/view`, {})).data.games;
}

export const info = async (id) => {
    
    return (await axios.get(`${API_URL}games/info`,
        {headers:{gameId: id}}
        )).data.game;
}

export const editPost = async (event, gameId, name, genre, developer, description, gameHours) => {
    event.preventDefault();
    const data = new FormData();
    data.append('gameId', gameId);
    data.append('name', name);
    data.append('genre', genre);
    data.append('developer', developer);
    data.append('description', description);
    data.append('gameHours', gameHours);
    await axios.post(`${API_URL}games/edit`, data, {});
}

export const deletePost = async (event, gameId) => {
    const data = new FormData();
    data.append('gameId', gameId);
    await axios.post(`${API_URL}games/delete`, data, {}
    );

}

export const registration = async (email, password) => {
    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);
  
      const response = await axios.post(
        `http://localhost:5000/api/auth/registration`,
        data,
        {}
      );

      alert(response.data.message);
      if (response.status === 200)
        return true;
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  
  export const login = (email, password) => {
    return async (dispatch) => {
      try {
        const data = new FormData();
        data.append("email", email);
        data.append("password", password);
  
        const response = await axios.post(
          `http://localhost:5000/api/auth/login`,
          data,
          {}
        );
        dispatch(setUser(response.data.user));
        
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
      } catch (e) {
        alert(e.response.data.message);
      }
    };
  };
  
  export const auth = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/auth/auth`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        dispatch(setUser(response.data.user));
        localStorage.setItem("token", response.data.token);
      } catch (e) {
        console.log(e.response)
        //alert(e.response.data.message);
        localStorage.removeItem("token");
      }
    };
};