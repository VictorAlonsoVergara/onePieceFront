import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { Context } from "../context/OnePieceContext";

export function CharactersPage({id}){
    const {getCharacters} = useContext(Context);
    console.log(getCharacters(id));

    return (
        <div> Hola mundo </div>
    );
}