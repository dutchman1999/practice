const Employee = ()=>{
    const employees = [
        { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering', salary: 80000 },
        { id: 2, name: 'Jane Smith', position: 'Marketing Manager', department: 'Marketing', salary: 90000 },
        { id: 3, name: 'Mike Johnson', position: 'Sales Representative', department: 'Sales', salary: 60000 },
        { id: 4, name: 'Emily Brown', position: 'HR Specialist', department: 'Human Resources', salary: 70000 },
        { id: 5, name: 'David Lee', position: 'Product Manager', department: 'Product Management', salary: 100000 }
    ];
    return(
        <fieldset>
            <legend>  <h1> The total number of employees available {employees.length} </h1></legend>
                 <table  >
                    <thead>
                        <tr>
                        <th> id </th><th> name </th><th> position </th> <th> department </th> <th> salary </th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee, index)=>{
                                return(
                                    <tr key = {index}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.position}</td>
                                        <td>{employee.department}</td>
                                        <td>{employee.salary}</td>
                                    </tr>
                                )}
                            )
                        }
                    </tbody>
                </table>
        </fieldset>
    )}
export default Employee;