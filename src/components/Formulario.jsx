import {useState} from 'react';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({addTodo}) => {

    const initialState = {
        firstName: "",
        description: "",
        status: "pendiente",
        prioridad: false

    }

    const [todo, setTodo] = useState(initialState)

    const {firstName, description, status, prioridad} = todo

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!firstName.trim()){
            e.target[0].focus();
            Swal.fire({
                title:'Error',
                text: 'I did not leave the name empty',
                icon: 'Error'
            })
            return;
        }
        if(!description.trim()){
            e.target[1].focus();
            Swal.fire({
                title:'Error',
                text: 'I did not leave the description empty',
                error: 'Error'
            })
            return;
        }
            Swal.fire({
                title: 'Exit',
                text: 'Todo Complete',
                icon: 'success'

            });
        addTodo({
            firstName,
            description,
           status: status !== 'pendiente',
            prioridad,
            id: uuidv4()
        })

        setTodo(initialState)
    };

    const handleChange = (e) => {
        console.log(e)

        // yo quiero hacer un objeto con las keys dinakicas

        /*const categoriaAnimales = 'animales-desechados';
        const categoriaFrutas = 'frutas-saraza';

        const objetoEstatico = {
            animales: 'mia, lola',
            frutas: 'manzana, pera, banana'
        }

        console.log(objetoEstatico)

        const objetoDinamico = {
            [caegoriaAnimales]: 'mia, lola',
            [categoriaFrutas]: 'manzana, pera, banana'
        }

        console.log(objetoDinamico)

 const { name, value, checked, type } = e.target;

        if (name === "firstName") {
            setTodo((prevState) => {
                return {
                    ...prevState,
                    firstName: value
                }
            })
        }

        if (name === "description") {
            setTodo((prevState) => {
                return {
                    ...prevState,
                    description: value
                }
            })
        }

        if (name === "status") {
            setTodo((prevState) => {
                return {
                    ...prevState,
                    status: value
                }
            })
        }

        if (name === "prioridad") {
            console.log('valor ', value)
            console.log('checked ', checked)

            setTodo((prevState) => {
                return {
                    ...prevState,
                    prioridad: checked
                }
            })
        }*/


        const { name, value, checked, type } = e.target;

    console.log(name)

        setTodo((old) => ({
            ...old,
        [name]: type === 'checkbox' ? checked : value

        }))
    };


    return (
        <>
           <h3>Add TODO</h3>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                className="form-control mb-2"
                name="firstName"
                placeholder="enter todo name"
                value={firstName}
                onChange={handleChange}
                />
                <textarea
                 className="form-control mb-2"
                 placeholder="enter description"
                 name="description"
                 value={description}
                 onChange={handleChange}
                />
                <select
                    name="status"
                    className="form-control mb-2"
                    value={status}
                    onChange={handleChange}
                >
                    <option value="pending">pending</option>
                    <option value="complete">complete</option>
                </select>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="prioridad"
                        checked={prioridad}
                        onChange={handleChange}
                        id="flexCheckDefault"
                    />
                        <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault">
                            Priority
                        </label>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>

            </form>
        </>
    );
};

export default Formulario;