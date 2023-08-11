import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addEmployee, getEmployee, updateEmployeee } from '../services/EmployeeService'

const AddOrUpdateEmployee = () => {

    const employee = {
        first_name: '',
        last_name: '',
        contact_number: '',
        birth_date: '',
        address_1: '',
        address_2: '',
        email: ''
    }

    const [employees, setEmployees] = useState(employee)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (id)
            getEmployee(id)
                .then(response => setEmployees({ ...response.data, birth_date: response.data.birth_date.split('-').reverse().join('-') }))
                .catch(error => toast.error(error.message))
        else
            setEmployees(employee)

    }, [id])

    const handleInput = event => {
        const { name, value } = event.target
        setEmployees({ ...employees, [name]: value })
    }

    const saveOrUpdate = event => {
        event.preventDefault()
        const employeeDTO = {
            first_name: employees.first_name, last_name: employees.last_name, contact_number: employees.contact_number,
            birth_date: employees.birth_date.split("-").reverse().join("-"), address_1: employees.address_1, address_2: employees.address_2, email: employees.email
        }

        if (id)
            updateEmployeee(id, employeeDTO)
                .then(() => {
                    toast.success("Employee updated successfully")
                    navigate('/allemployees')
                })
                .catch(error => toast.error(error.message))
        else
            addEmployee(employeeDTO)
                .then(() => {
                    toast.success("Employee added successfully")
                    navigate('/allemployees')
                })
                .catch(error => toast.error(error.message))
    }

    const reset = () => {
        setEmployees(employee)
    }

    const navigateToBack = (e) => {
        navigate(-1)
    }

    return (
        <div className="row" >
            <div className="col-md-10 mx-auto">
                <div className="card" style={{ backgroundColor: '#fce6ea' }}>
                    {
                        id ? <h4 className='mt-2 mb-0'>Update Employee</h4> : <h4 className='mt-2 mb-0'>Add New Employee</h4>
                    }
                    <hr />
                    <div className='card-body'>
                        <div className="col-10 mx-auto">
                            <form onSubmit={saveOrUpdate}>
                                <div className='row mb-1'>
                                    <div className='col mb-3'>
                                        <div className="form-floating">
                                            <input type="text" className="form-control" name='first_name' id="first_name" placeholder="First Name" autoComplete='off'
                                                required value={employees.first_name} onChange={handleInput}
                                            />
                                            <label htmlFor="first_name">First Name</label>
                                        </div>
                                    </div>
                                    <div className='col mb-3'>
                                        <div className="form-floating">
                                            <input type="text" className="form-control" name='last_name' id="last_name" placeholder="Last Name" autoComplete='off'
                                                required value={employees.last_name} onChange={handleInput}
                                            />
                                            <label htmlFor="last_name">Last Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col'>
                                        <div className="form-floating ">
                                            <input type="text" className="form-control" name='email' id="email" placeholder="name@example.com" autoComplete='off'
                                                required value={employees.email} onChange={handleInput}
                                            />
                                            <label htmlFor="email">Email address</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="form-floating">
                                            <input type="text" className="form-control" name='contact_number' id="contact_number" placeholder="Contact Number" autoComplete='off'
                                                required value={employees.contact_number} onChange={handleInput}
                                            />
                                            <label htmlFor="contact_number">Contact Number</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="form-floating ">
                                            <input type="date" className="form-control" name='birth_date' id="birth_date" placeholder="DOB" autoComplete='off'
                                                required value={employees.birth_date} onChange={handleInput}
                                            />
                                            <label htmlFor="birth_date">DOB</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea type="text" className="form-control" name='address_1' id="address_1" placeholder="Address 1" autoComplete='off' style={{ minHeight: '120px', maxHeight: '120px' }}
                                        required value={employees.address_1} onChange={handleInput}
                                    />
                                    <label htmlFor="address_1">Address 1</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea type="text" className="form-control" name='address_2' id="address_2" placeholder="Address 2" autoComplete='off' style={{ minHeight: '120px', maxHeight: '120px' }}
                                        required value={employees.address_2} onChange={handleInput}
                                    />
                                    <label htmlFor="address_2">Address 2</label>
                                </div>
                                <br />
                                <div className='d-flex justify-content-center gap-3'>
                                    {
                                        id ? <button type='submit' className='btn btn-success'>Update</button> : <button type='submit' className='btn btn-success'>Add</button>
                                    }
                                    <button type="button" className='btn btn-danger' onClick={() => reset()}>Reset</button>
                                    <button type="button" className='btn btn-secondary' onClick={() => navigateToBack()}>Back</button>
                                </div>
                            </form>
                        </div>
                    </div >
                </div>
                <br />
            </div>
        </div>
    )
}

export default AddOrUpdateEmployee