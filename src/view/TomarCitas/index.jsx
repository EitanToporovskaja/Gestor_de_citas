import { useState,useEffect }from "react";
import {style} from  "../TomarCitas/style";
import Formulario from "../../components/Formulario";

const TomarCitas = ( props ) =>{

    return (
        <div>
            <h1>Listado de usuarios: </h1>
            <div class="cards">
                <div class="card">
                    <Formulario/>
                               
                </div>
            </div>
        </div>
    )
}
export default TomarCitas