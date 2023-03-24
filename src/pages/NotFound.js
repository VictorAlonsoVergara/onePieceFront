import { useNavigate } from "react-router-dom"

export function NotFound(){
    const navigate = useNavigate();
    return (
        <div> <p onClick = {() => navigate("/")}  > Página no encontrada </p> </div>
    )
}