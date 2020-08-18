import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idReceta, setIdReceta] = useState(null)
    const [trago, setTrago] = useState({})
    
    useEffect(() => {
        if (idReceta){
            const api = async () =>{
                const response = await Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`)

                setTrago(response.data.drinks[0])
            }
            api();
        }
    }, [idReceta]);

    return(
        <ModalContext.Provider
            value={{
                trago,
                setIdReceta,
                setTrago
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;


