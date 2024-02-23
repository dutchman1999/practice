const Items = ()=>{
    const items = [
        { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, stock: 50 },
        { id: 2, name: 'Headphones', category: 'Electronics', price: 100, stock: 100 },
        { id: 3, name: 'Bookshelf', category: 'Furniture', price: 200, stock: 20 },
        { id: 4, name: 'T-shirt', category: 'Apparel', price: 20, stock: 200 },
        { id: 5, name: 'Watch', category: 'Accessories', price: 150, stock: 80 }
    ];
    return(
        <fieldset>
            <legend> <h1> List of items: Total: {items.length} </h1></legend>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>category</th>
                        <th>price</th>
                        <th>stock</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map((item,index)=>{
                        return(
                          
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    <td>{item.stock}</td>
                                </tr>
                       
                        )
                    })}
                </tbody>
            </table>
        </fieldset>
)}
export default Items;