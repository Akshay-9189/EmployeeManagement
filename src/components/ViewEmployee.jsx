import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getEmployee } from '../services/EmployeeService'

const ViewEmployee = () => {

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

    useEffect(() => {
        if (id)
            getEmployee(id)
                .then(response => setEmployees({ ...response.data, birth_date: response.data.birth_date.split('-').reverse().join('-') }))
                .catch(error => toast.error(error.message))
    }, [id])

    return (
        <div className="row">
            <div className="col-md-8 mx-auto">
                <div className="card" style={{ backgroundColor: '#fce6ea' }}>
                    <h4 className='mt-2 mb-0'>Employee Data</h4>
                    <hr />
                    <div className='card-body'>
                        <div className="col-8 mx-auto">
                            <form >
                                <div className='row mb-3'>
                                    <div className='col'>
                                        <div className="form-floating">
                                            <input type="text" className="form-control" name='first_name' id="first_name" placeholder="First Name" autoComplete='off' disabled value={employees.first_name} />
                                            <label htmlFor="first_name">First Name</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="form-floating">
                                            <input type="text" className="form-control" name='last_name' id="last_name" placeholder="Last Name" autoComplete='off' disabled value={employees.last_name} />
                                            <label htmlFor="last_name">Last Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col'>
                                        <div className="form-floating ">
                                            <input type="text" className="form-control" name='email' id="email" placeholder="name@example.com" autoComplete='off' disabled value={employees.email} />
                                            <label htmlFor="email">Email address</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="form-floating">
                                            <input type="text" className="form-control" name='contact_number' id="contact_number" placeholder="Contact Number" autoComplete='off' disabled value={employees.contact_number} />
                                            <label htmlFor="contact_number">Contact Number</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="form-floating ">
                                            <input type="date" className="form-control" name='birth_date' id="birth_date" placeholder="DOB" autoComplete='off' disabled value={employees.birth_date} />
                                            <label htmlFor="birth_date">DOB</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea type="text" className="form-control" name='address_1' id="address_1" placeholder="Address 1" autoComplete='off' disabled style={{ minHeight: '120px', maxHeight: '120px' }} value={employees.address_1} />
                                    <label htmlFor="address_1">Address 1</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea type="text" className="form-control" name='address_2' id="address_2" placeholder="Address 2" autoComplete='off' disabled style={{ minHeight: '120px', maxHeight: '120px' }} value={employees.address_2} />
                                    <label htmlFor="address_2">Address 2</label>
                                </div>
                                <br />
                                <div className='d-flex justify-content-center gap-3'>
                                    <Link className='btn btn-secondary' to={'/'}>Back</Link>
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

export default ViewEmployee