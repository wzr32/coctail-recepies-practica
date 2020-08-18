import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

//Crear el context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    //crear el state del context
    const [ categorias , setCategorias ] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async () => {
            const response = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)

            setCategorias(
                response.data.drinks
            )
        }
        obtenerCategorias();
    }, [])
    
    return(
        <CategoriasContext.Provider
            value={{
                categorias,
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;