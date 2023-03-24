import axios from "axios";

export const getMoviesRequest = async () => {
    return await axios.get("http://localhost:8080/movies");
};

export const getCharactersRequest = async (id) => {
    return await axios.get("http://localhost:8080/characters/" + id);
};

export const getFullCharacterRequest = async (id) => {
    return await axios.get("http://localhost:8080/fullcharacters/" + id);
};