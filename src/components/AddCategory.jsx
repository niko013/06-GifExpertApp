import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => { //si no pongo entre corchetes {setCategories} me muestra value solamente

        const [inputValue, setinputValue] = useState()

        // const onInputChange = (event) => { //puedo borrar el evento y dejar cargado el ({target}) para destructurar
        //     console.log(event.target.value)
        //     setinputValue(event.target.value); // para poder escribir en el input
        // }

        const onInputChange = ({target}) => { //importante no olvide los {} en el target
            setinputValue(target.value); // para poder escribir en el input
        }

        const onSubmit = (event) =>{
            event.preventDefault(); //prevee el evento del formulario de recarga
            if(inputValue.trim().length <=1) return; // par que no haya elementos vacios y borres espacios izquierda y derecha
            console.log(inputValue);
                
            // setCategories(categories => [inputValue, ...categories]); //hace una copia de las categorias, para que al momento de agregar un elemento no se borre lo anterior o todo
           onNewCategory(inputValue.trim());
            setinputValue('');

        }

        return (
            // <form onSubmit={(event) => onSubmit(event)}>
            <form onSubmit={onSubmit}>
                <input 
                type="text" 
                placeholder="Buscar Gisfs"
                value={inputValue}
                // onChange={ evente => onInputChange(evente)} // de esta manera tambien funciona
                onChange={onInputChange}
                />
             </form>
        )
}


// x6LZx9sHChH3ADGzTAvGplijyhHqlKXO
