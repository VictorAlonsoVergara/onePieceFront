import { useContext, useEffect, useState } from "react"
import { Context } from "../context/OnePieceContext";
import MultiActionAreaCard from "../component/MultiActionAreaCard"
import { useParams } from "react-router-dom";

export function FullCharacterPage(){
    const {getFullCharacters} = useContext(Context);
    const [fullCharacters, setFullCharacters] = useState([]);
    const params = useParams();
    useEffect( () => {
        (async () => {
            const data = await getFullCharacters(params.id);
            setFullCharacters(data);
        })()
    }, [params.id, getFullCharacters])
    return (
        <div>             
            <MultiActionAreaCard data = {fullCharacters} url = "/fullcharacters/"/>
        </div>
    );
}