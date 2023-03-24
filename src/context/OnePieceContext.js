import { createContext, useEffect, useState } from "react";
import { getMoviesRequest, getCharactersRequest, getFullCharacterRequest } from "../api/onePiece.api";

export const Context = createContext();

export const OnePieceContext = ({children}) => {
    const [movies, setMovies] = useState([]);
    async function getMovies(){
        const response = await getMoviesRequest();
        setMovies(response.data);
    }
    useEffect( () => {
        getMovies();
    }, [] )
    const getCharacters = async (id) => {
        const response = await getCharactersRequest(id);
        return response.data;
    }
    const getFullCharacters = async (id) => {
        const response = await getFullCharacterRequest(id);
        return response.data;
    }
    return (
        <Context.Provider value={{movies, getCharacters, getFullCharacters}}>
            {children}
        </Context.Provider>
    );
};
