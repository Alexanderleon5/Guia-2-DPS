
import React, {useState} from 'react';
import Todo from '../components/Todo';


const Form = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([
        {todo: 'todo 1'},
        {todo: 'todo 2'},
        {todo: 'todo 3'}
])

const handleChange = e => setTodo({[e.target.name]: e.target.value})
const handleClick = e => {
    if(Object.keys(todo).length === 0 || todo.todo.trim() === ''){
        alert('el campo no pude estar vacio')
        return
    }
    setTodos([...todos, todo])
}

const deleteTodo = indice => {
    const newTodos = [...todos]
    newTodos.splice(indice, 1)
    setTodos(newTodos)
}
    return (
        <>
        <form onSubmit = {e => e.preventDefault()}>
            <label>Agregar tarea</label><br />
            <input type="text" name='todo' onChange={handleChange} />
            <button onClick={handleClick}>Agregar</button>
        </form>
        {
            todos.map((value, index) => (<Todo todo={value.todo} />))
            //Muy bien, lo que hacemos es recorrer nuestro array de tareas (todos) el cual habíamos inicializado
            //con tres objetos, dentro de la función map incluimos nuestro componente Todo y le pasamos
            //el prop que necesita
        }
        </>
    )
}
export default Form