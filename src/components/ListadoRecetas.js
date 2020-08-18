import React, { useContext } from 'react';
import { RecetasContext } from '../context/RecetasContext';
import Receta from './Receta';

const Recetas = () => {

    const { recetas } = useContext(RecetasContext);

    // console.log(recetas)

    return (
        <div>
            <h1 className="mt-5">Listado</h1>

            <div className="row mt-5">
                {recetas.map(r => (
                    <Receta
                        key={r.idDrink}
                        r={r}
                    />  
                ))}
            </div>
        </div>
    );
};

export default Recetas;