import React from 'react'

const Todo = ({todo, index, deleteTodo}) => {
    return (
        <>
        <div className='list'>
            <h3>{todo}</h3> <button className='btn-delete' onClick={() => deleteTodo(index)}>X</button>

        </div>
       
        </>

        //Eliminamos la etiqueta h1 y en su lugar agregamos un h3 el cual se encarga de imprimir un prop que es únicamente el nombre de nuestra tarea.
        
        
    )
}
export default Todo
