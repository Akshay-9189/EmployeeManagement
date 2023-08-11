import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{ height: '100vh' }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <Link to={'/'} className='navbar-brand'>HRM APP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item">
                                <NavLink to={"/allemployees"} className='btn btn-link'>Employee List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/add'} className='btn btn-link'>Add Employee</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br />
            <div>
                <Outlet />
            </div>
            <br />
        </div>
    )
}

export default Navbar