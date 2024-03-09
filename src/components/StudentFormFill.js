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

    const editOnclick= (index,studentDetails)=>{
        setName(studentDetails.name);
        setClass(studentDetails.Class);
        setFees(studentDetails.fees);
        setSub(studentDetails.sub);

    }

    return (
        <div>
            {


                <div>
                    <table align="right">
                        <thead>
                            <p align= "center"> New students are : {newAdmission.length} </p>

                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Subjects</th>
                                <th>Fees</th>
                                <th>Edit</th>
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
                                            <button onClick={editOnclick.bind(this, index, studentDetails)} > Edit</button>
                                        </td>
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
            <h1 align="center"> Entry Form </h1>

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
                            <button align="center" onClick={saveFormData}><b>Save</b> </button>
                    </tr>

                </thead>

            </table>
        </div>
    )
}
export default Hook2;