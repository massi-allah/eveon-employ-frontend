import React, { useEffect, useState } from "react";
import axios from "axios";



function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('https://employ-backend-ccb20514b314.herokuapp.com/api/employees/')
        .then(response => {
            setEmployees(response.data);
        })
        .catch(error => {
            console.error("There has a problem with the api fetching!")
        });
    }, []);

    return (
    <div>
        <h1>Employees</h1>
        <ul>
        {employees.map(employee => (
            <li key={employee.id}>
            {employee.first_name} {employee.last_name} - {employee.position}
            </li>
        ))}
        </ul>
    </div>
    );
}

export default EmployeeList;