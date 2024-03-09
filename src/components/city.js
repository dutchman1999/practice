

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
        <div>
            <h1> List of cities </h1>
            <p>
                { cities.map(
                    (cityName,index)=>{
                        return(
                            <div className="leftAlign">
                                <p>{index}. {cityName}</p>
                            </div>
                        )
                    }
                )}
            </p>
        </div>
    )
}
export default Cities;