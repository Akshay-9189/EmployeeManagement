import axios from "axios"
import { employeeService } from "../constants"

export const getAllEmployee = () => {
    return axios.get(employeeService.URL + '/')
}

export const addEmployee = (employeeDTO) => {
    return axios.post(employeeService.URL + '/add', employeeDTO)
}

export const getEmployee = (id) => {
    return axios.get(employeeService.URL + `/${id}`)
}

export const updateEmployeee = (id, employeeDTO) => {
    return axios.put(employeeService.URL + `/update/${id}`, employeeDTO)
}

export const deleteEmployee = (id) => {
    return axios.delete(employeeService.URL + `/delete/${id}`)
}

export const sortLNameDescending = () => {
    return axios.get(employeeService.URL + '/sortLNameDescending')
}

export const sortLNameAscending = () => {
    return axios.get(employeeService.URL + '/sortLNameAscending')
}

export const sortFNameDescending = () => {
    return axios.get(employeeService.URL + '/sortFNameDescending')
}

export const sortFNameAscending = () => {
    return axios.get(employeeService.URL + '/sortFNameAscending')
}

export const sortDOBDescending = () => {
    return axios.get(employeeService.URL + '/sortDOBDescending')
}

export const sortDOBAscending = () => {
    return axios.get(employeeService.URL + '/sortDOBAscending')
}