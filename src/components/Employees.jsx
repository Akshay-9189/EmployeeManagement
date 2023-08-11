import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAllEmployee, sortDOBAscending, sortDOBDescending, sortFNameAscending, sortLNameAscending, sortLNameDescending } from '../services/EmployeeService'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'

const Employees = () => {
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllEmp()
    }, [])

    const getAllEmp = () => {
        getAllEmployee()
            .then(response => {
                setEmployees(response.data)
            }).catch(error => toast.error(error.message))
    }

    const getAction = (action) => {
        switch (action) {

            case 'FNA':
                sortFNameAscending()
                    .then(response => setEmployees(response.data))
                    .catch(error => toast.error(error.message))
                break;

            case 'FND':
                sortLNameDescending()
                    .then(response => setEmployees(response.data))
                    .catch(error => toast.error(error.message))
                break;

            case 'LNA':
                sortLNameAscending()
                    .then(response => setEmployees(response.data))
                    .catch(error => toast.error(error.message))
                break;

            case 'LND':
                sortLNameDescending()
                    .then(response => setEmployees(response.data))
                    .catch(error => toast.error(error.message))
                break;

            case 'DOBA':
                sortDOBAscending()
                    .then(response => setEmployees(response.data))
                    .catch(error => toast.error(error.message))
                break;

            case 'DOBD':
                sortDOBDescending()
                    .then(response => setEmployees(response.data))
                    .catch(error => toast.error(error.message))
                break;

            default:
                getAllEmployee()
                    .then(response => setEmployees(response.data))
                    .catch(error => toast.error(error.message))
                break;
        }
    }

    return (
        <div style={{ width: '88vw', margin: 'auto' }} >
            <nav className="navbar navbar-expand-lg bg-light mb-2">
                <div className="container-fluid">
                    <button className='btn' onClick={() => getAction()}>Sort</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0 gap-2">
                            <li className="nav-item">
                                <div className="btn-group border" role="group" aria-label="Basic example1">
                                    <button type="button" className="btn " onClick={() => getAction('FNA')}><AiOutlineSortAscending /></button>
                                    <div className='d-flex align-items-center'>First Name</div>
                                    <button type="button" className="btn " onClick={() => getAction('FND')}><AiOutlineSortDescending /></button>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="btn-group border" role="group" aria-label="Basic example2">
                                    <button type="button" className="btn " onClick={() => getAction('LNA')}><AiOutlineSortAscending /></button>
                                    <div className='d-flex align-items-center'>Last Name</div>
                                    <button type="button" className="btn " onClick={() => getAction('LND')}><AiOutlineSortDescending /></button>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="btn-group border" role="group" aria-label="Basic example3">
                                    <button type="button" className="btn " onClick={() => getAction('DOBA')}><AiOutlineSortAscending /></button>
                                    <div className='d-flex align-items-center'>DOB</div>
                                    <button type="button" className="btn " onClick={() => getAction('DOBD')}><AiOutlineSortDescending /></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div style={{ overflowY: 'scroll', height: '82vh' }}>
                {
                    employees.length !== 0 ? (
                        <div className="row row-cols-1 row-cols-md-3 g-4 mx-1 scroll" style={{ maxHeight: '100vh' }}>
                            {
                                employees.map(emp => (
                                    <div key={emp.id}>
                                        <div className="col ">
                                            <div className="card allempcard" onClick={() => navigate(`/${emp.id}`)}>
                                                <div className="card-body ">
                                                    <h5 className="card-title">{emp.first_name} {emp.last_name}</h5>
                                                    <hr />
                                                    <div className='row'>
                                                        <div className='d-flex flex-column align-items-start'>
                                                            <p >Email:- {emp.email}</p>
                                                            <p >Contact:- {emp.contact_number}</p>
                                                            <p>DOB:- {emp.birth_date}</p>
                                                            <p>Address 1:-{emp.address_1}</p>
                                                            <p>Address 2:-{emp.address_2}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div >
                    ) : (
                        <div className='col-8 mx-auto'>
                            <div className="card shadow-lg" style={{ minHeight: '300px' }}>
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <h4 className="card-title">Employee Not Found !!!</h4>
                                </div>
                            </div>
                            <br />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Employees