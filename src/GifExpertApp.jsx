import { useState } from 'react';
import { AddCategory } from './components/addCategory';

export const GifExpertApp = () => {
  
        const [categories, setCategories]  = useState(['One Punch', 'Dragon Ball']);

        const onAddCategory = (newCategory) =>{

               if(categories.includes(newCategory)) return;
            //    if(categories.includes(newCategory)){
            //     return
            //    } ;  es lo mismo que el if de arriba
               setCategories([ newCategory, ...categories]);  // los 3 puntos hace una copia de categoria [] eso es desectructuracion
                // setCategories(cat => [ ...categories, 'valores']);  hay problema con key
                // setCategories([ 'agregar', ...categories ]) para agregarlo al principio de la final    
         }

        return (
            <>
                {/* {titulo} */}
                <h1>GifExpertApp</h1>
                <h2>Buscador de One  Punch Man</h2>

                {/* input */}
                 <AddCategory 
                //  setCategories={setCategories}
                    onNewCategory = { (value) => onAddCategory(value)}  //es lo mismo de abajo
                    // onNewValue = {onAddCategory}
                 />

                {/* Listado de tarjetas o Gif */}
                
                 {/* <button onClick={setCategories}>
                    Agregar
                </button>                  
                 */}
                <ol>
                    { 
                    categories.map( (category) => {
                        return <li key={category}> {category} </li>
                        })      
                    }     
                    {/* <li> ABC</li> */}
                </ol>

                    {/* Gif Item */}
            </>
        )
}

