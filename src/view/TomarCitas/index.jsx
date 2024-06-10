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
                    {/*<Card
                    name={users.map(user => <li>{user.name.first}</li>)}
                    photo={users.map(user => <img src={user.picture.large} alt="imagen user"/>)} 
                    country={users.map(user => <li>{user.location.country}</li>)}
                    city={users.map(user => <li>{user.location.city}</li>)}
            /> */}                   
                </div>
            </div>
        </div>
    )
}
export default TomarCitas