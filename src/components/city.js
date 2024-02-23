

const Cities = ()=>{

const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose"
];
    return(
        <fieldset>
            <legend> <h1> List of cities </h1></legend>
            <p>
                { cities.map(
                    (cityName,index)=>{
                        return(
                            <div>
                                <p>{index}. {cityName}</p>
                            </div>
                        )
                    }
                )}
            </p>
        </fieldset>
    )
}
export default Cities;