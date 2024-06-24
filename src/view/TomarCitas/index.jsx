import { useState,useEffect }from "react";
import {style} from  "./style";
import Formulario from "../../components/Formulario";

const TomarCitas = ( props ) =>{

    return (
        <div style={style.flex}>
            <h1 style={style.h1}>Listado de usuarios: </h1>
            <div class="cards">
                <div class="card">
                    <Formulario/>
                               
                </div>
            </div>
        </div>
    )
}
export default TomarCitas