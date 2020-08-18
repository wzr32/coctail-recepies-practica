import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({r}) => {
    
    const [ modalStyle ] = useState(getModalStyle);
    const [open, setOpen] = useState(false)
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const { setIdReceta, trago, setTrago } = useContext(ModalContext);

    const mostrarIngredientes = trago => {
        let ingrediente = [];
        for( let i=1; i<16; i++){
            if (trago[`strIngredient${i}`]){
                ingrediente.push(
                    <li key={trago.idDrink}>{trago[`strIngredient${i}`]}{trago[`strMeasure${i}`]}</li>)
            }
        };

        return ingrediente;
    };

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{r.strDrink}</h2>
                <img className="img-fluid card-img-top" src={r.strDrinkThumb} alt={r.strDrink}/>

                <div className="card-body">
                    <button
                        className="btn btn-primary btn-block"
                        onClick={() => {
                            setIdReceta(r.idDrink);
                            handleOpen(!open);
                        }}
                    >  Ver Receta </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            setTrago({})
                            setIdReceta(null)
                            handleClose()
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{r.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {trago.strInstructions}
                            </p>
                            <img src={trago.strDrinkThumb} alt={trago.strDrink} className="img-fluid my-4"/>
                            <h3>Ingredientes y Cantidades</h3>
                            <ul>
                                { mostrarIngredientes(trago) }
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
            
        </div>
    );
};

export default Receta;