const Todo = ({ todo }) => {

    const {name, description, status, prioridad} = todo



    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{name} ({status ? 'Finish' : 'Pendiente'})</div>
                <p>{description}</p>
                <div>
                    <button className='btn.btn-danger me-2'>Delete</button>
                    <button className='btn.btn-warning'>Edit</button>
                </div>
            </div>

            <span className="badge bg-primary rounded-pill">{prioridad && 'Priority'}</span>
        </li>
    )
}

export default Todo;