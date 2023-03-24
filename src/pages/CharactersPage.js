import { useContext, useEffect, useState } from "react"
import { Context } from "../context/OnePieceContext";
import MultiActionAreaCard from "../component/MultiActionAreaCard"
import { useParams } from "react-router-dom";

export function CharactersPage(){
    const {getCharacters} = useContext(Context);
    const [characters, setCharacters] = useState([]);
    const params = useParams();
    useEffect( () => {
        (async () => {
            const data = await getCharacters(params.id);
            setCharacters(data);
        })()
    }, [params.id, getCharacters])
    if(characters.length === 0){
        return <div>"No se encontraron resultados"</div>;
    }
    return (
        <div>             
            {characters.map(data => (
                <MultiActionAreaCard data = {data} url = "/fullcharacters/" key = {data.idCharacter}/>
            ))}
        </div>
    );
}