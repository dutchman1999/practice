const Customer = ()=>{
    
    const customers = [
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com', phone: '123-456-7890', city: 'New York' },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '987-654-3210', city: 'Los Angeles' },
        { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', phone: '111-222-3333', city: 'Chicago' },
        { id: 4, name: 'Diana Taylor', email: 'diana@example.com', phone: '444-555-6666', city: 'Houston' },
        { id: 5, name: 'Eva Martinez', email: 'eva@example.com', phone: '777-888-9999', city: 'Miami' }
    ];

    return(
        <fieldset>
            <legend>
            <h1> Here is the list of customers {customers.length}</h1> </legend>
            <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customers.map( (customer,index)=>{
                                        return(
                                        <tr key={index}>
                                        <td>{customer.id}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.city}</td>
                                    </tr>
                                    )})
                                }
                               
                            </tbody>
                        </table>
           
        </fieldset>

)}
export default Customer;
