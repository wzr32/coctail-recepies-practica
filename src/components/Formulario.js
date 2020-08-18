import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const{ categorias } = useContext(CategoriasContext);
    const{ setBuscar, setConsulta } = useContext(RecetasContext);

    const [busqueda, setBusqueda] = useState({
        nombre: "",
        categoria: ""
    })

    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setBuscar(
            busqueda
        );
        setConsulta(true)
    };

    return (
        <form 
            className="col-12"
            onSubmit={handleSubmit}    
        >

            <fieldset className="text-center">
                <legend>
                    Busca bebidas por categoria o ingredientes
                </legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        type="text"
                        className="form-control"
                        placeholder="Busqueda por Ingrediente"
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="categoria"
                        onChange={handleChange}
                    >
                        <option value="">Selecciona categoria</option>
                        {categorias.map(c => (
                            <option 
                            key={c.strCategory}
                            value={c.strCategory}
                            >{c.strCategory}</option>
                        ))}

                    </select>
                </div>

                <div className="col-md-4">
                    <button 
                        type="submit" 
                        className="btn btn-primary btn-block">
                            Buscar bebidas
                        </button>
                </div>
            </div>
        </form>
    );
};

export default Formulario;