import React, { useState, createContext } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [ consulta, setConsulta ] = useState(false);
    const [ recetas, setRecetas ] = useState([])   
    const [ buscar, setBuscar ] = useState({
        nombre: "",
        categoria: ""
    })

    const { nombre, categoria } = buscar;

    useEffect(() => {
        if (consulta){
            const api = async() => {
                const response = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`)
    
                setRecetas(response.data.drinks);
                setConsulta(false)
            };
            api()
        };
    }, [categoria, nombre, consulta]);


    return (
        <RecetasContext.Provider
            value={{
                setBuscar,
                setConsulta,
                recetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
};

export default RecetasProvider;