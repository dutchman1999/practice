const Company = ()=>{
    const bangaloreCompanies = ["Wipro", "Tata Consultancy Services (TCS)", "Accenture", "IBM", "Flipkart"];
    
    return(
        <fieldset>
        <legend> <h1> The list of Companies located in Bangalore: Total {bangaloreCompanies.length} </h1> </legend>
        {bangaloreCompanies.map((companyName, index) => (
            <div >
                <p key={index}> {index}. {companyName}</p>
            </div>
        ))}
    </fieldset>
    )
    
}
export default Company;