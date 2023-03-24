import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { Context } from "../context/OnePieceContext";

export function FullCharacterPage({id}){
    const {getFullCharacters} = useContext(Context);
    console.log(getFullCharacters(id));

    return (
        <div> Hola mundo </div>
    );
}