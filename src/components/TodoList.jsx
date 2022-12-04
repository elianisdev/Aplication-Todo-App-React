import Formulario from './Formulario';
import {useState} from 'react';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        console.log(todo);
        setTodos((old) =>
        [...old, todo])
    }



    return (
        <>
        <Formulario addTodo={addTodo} />
            <ul className='list-group list-group-numbered mt-2' >
                {
                    todos.map(item => (
                        <Todo key={item.id} todo={item} />
                    ))
                }
            </ul>
        </>
    );
};

export default TodoList;