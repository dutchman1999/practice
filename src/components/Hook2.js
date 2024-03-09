import { useState } from "react";
const Hook2 = () => {
    let [newAdmission, setNewAdmission] = useState([]);
    let [name, setName] = useState('');
    let [Class, setClass] = useState('');
    let [sub, setSub] = useState('');
    let [fees, setFees] = useState('');


    const saveFormData = () => {
        let inputFields = { name: name, Class: Class, sub: sub, fees: fees };
        setNewAdmission(inputFields = [...newAdmission, inputFields]);
        setName('');
        setClass('');
        setSub('');
        setFees("");
    }
    const deleteOnclick = (index) => {
        newAdmission.splice(index, 1)
        setNewAdmission([...newAdmission]);
    }
    return (
        <div>
            <h1> Student Form Fill-up </h1>
            <h1> Newly admission students are : Total: {newAdmission.length} </h1>
            {


                <div>
                    <table align="right">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Subjects</th>
                                <th>Fees</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newAdmission.map((studentDetails, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{studentDetails.name}</td>
                                        <td>{studentDetails.Class}</td>
                                        <td>{studentDetails.sub}</td>
                                        <td>{studentDetails.fees}</td>
                                        <td>
                                            <button onClick={deleteOnclick.bind(this, index)} > Delete</button>
                                        </td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>


                </div>


            }

            <table align="left">
                <thead>
                    <tr>
                        <th>Name</th>
                        <input type="text" onChange={(e) => { setName(e.target.value) }} value={name}></input>
                    </tr>
                    <tr>
                        <th>Class</th>
                        <input type="text" onChange={(e) => { setClass(e.target.value) }} value={Class} ></input>
                    </tr>
                    <tr>
                        <th>Subjects</th>
                        <input type="text" onChange={(e) => { setSub(e.target.value) }} value={sub} ></input>
                    </tr>
                    <tr>
                        <th>Fees</th>
                        <input type="text" onChange={(e) => { setFees(e.target.value) }} value={fees} ></input>
                    </tr>
                    <tr>
                        <th colSpan={2} className="saveButton">
                            <button align="center" onClick={saveFormData}><b>Save</b> </button>
                        </th>
                    </tr>

                </thead>

            </table>
        </div>
    )
}
export default Hook2;