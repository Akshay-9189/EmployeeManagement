import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { deleteEmployee, getAllEmployee } from '../services/EmployeeService'


const ListEmployee = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmp()
    }, [])

    const getAllEmp = () => {
        getAllEmployee()
            .then(response => {
                setEmployees(response.data)
            }).catch(error => toast.error(error.message))
    }

    const deleteEmp = (id) => {
        deleteEmployee(id)
            .then(() => {
                toast.success("Employee deleted sucessfully")
                getAllEmp()
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div>
            <br />
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className='card '>
                        {
                            employees.length !== 0 ? (
                                <div className="card-body" style={{ backgroundColor: 'lightskyblue' }}>
                                    <h5>List Employee</h5>
                                    <hr />
                                    <div className="table-responsive">
                                        <table className="table table-hover table-striped" style={{ backgroundColor: 'rgb(220, 178, 159)' }}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Id</th>
                                                    <th scope="col">First Name</th>
                                                    <th scope="col">Last Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Contact</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-group-divider">
                                                {
                                                    employees.map(emp => (
                                                        <tr key={emp.id}>
                                                            <td >{emp.id}</td>
                                                            <td>{emp.first_name}</td>
                                                            <td>{emp.last_name}</td>
                                                            <td>{emp.email}</td>
                                                            <td>{emp.contact_number}</td>
                                                            <td>
                                                                <div className="d-flex justify-content-center gap-3">
                                                                    <Link to={`/update/${emp.id}`} className='btn btn-sm btn-warning'>Update</Link>
                                                                    <button className="btn btn-sm btn-danger" onClick={() => deleteEmp(emp.id)}>Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ) : (
                                <div className="card-body" style={{ backgroundColor: 'lightskyblue ', height: '100px' }}>
                                    <h6>Employee Not Available</h6>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListEmployee