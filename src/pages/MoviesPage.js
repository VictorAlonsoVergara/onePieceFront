import { useContext } from "react";
import { Context } from "../context/OnePieceContext";
import MultiActionAreaCard from "../component/MultiActionAreaCard"

export function MoviesPage(){
    const {movies} = useContext(Context);
    return (       
        <div>             
            {movies.map(data => (
                <MultiActionAreaCard data = {data} url = "/characters/" key = {data.idMovie}/>
            ))}
        </div>
    );
}