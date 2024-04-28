
import { useState } from "react";

const Hook2 = () => {
    let [alluser, updateUser] = useState([
        { name: "Alex", mobile: 99999999999, age: "30", edu: "M.Tech" },
        { name: "Mohit", mobile: 7777777777, age: "40", edu: "B.Tech" }
    ]);

    let [fullname, pickName] = useState("");
    let [mobileno, pickMobile] = useState("");
    let [age, pickAge] = useState("");
    let [education, pickEdu] = useState("");
    let [message, updateMessage] = useState("Enter User Details...");
    let [btntext, updateText] = useState("Save User");


    const save = () => {
        let newuser = { name: fullname, mobile: mobileno, age: age, edu: education };

        if (userindex === -1) {
            updateUser([...alluser, newuser]);
            updateMessage(fullname + " Added Successfully !");
        } else {
            alluser[userindex] = newuser;
            updateIndex(-1);
            updateMessage(fullname + " Updated Successfully !");
            updateText("Save User");
        }

        pickName("");
        pickMobile("");
        pickAge("");
        pickEdu("");
    }

    const deleteUser = (index, name) => {
        alluser.splice(index, 1);
        updateUser([...alluser]);
        updateMessage(name + " Deleted Successfully !");
    }

    let [userindex, updateIndex] = useState(-1);
    const editUser = (user, index) => {
        updateIndex(index);

        pickName(user.name);
        pickMobile(user.mobile);
        pickAge(user.age);
        pickEdu(user.edu);

        updateText("Update User");
    }

    return (
        <div className="container">
            <div className="row">
                <h1> Array of Object Add, List, Delete </h1>
                <p align="center"> Total User : {alluser.length} # {userindex} </p>
                <p> {message} </p>
                <div className="col-md-4 border rounded">

                    <table align="center" className="table table-striped table-hover">
                        <tbody>
                            <tr>
                                <td> Full Name </td>
                                <td>
                                    <input type="text"
                                        onChange={obj => pickName(obj.target.value)}
                                        value={fullname} />
                                </td>
                            </tr>
                            <tr>
                                <td> Mobile No </td>
                                <td>
                                    <input type="text"
                                        onChange={obj => pickMobile(obj.target.value)}
                                        value={mobileno} />
                                </td>
                            </tr>
                            <tr>
                                <td> Age </td>
                                <td>
                                    <input type="text"
                                        onChange={obj => pickAge(obj.target.value)}
                                        value={age} />
                                </td>
                            </tr>
                            <tr>
                                <td> Education </td>
                                <td>
                                    <input type="text"
                                        onChange={obj => pickEdu(obj.target.value)}
                                        value={education} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" align="center">
                                    <button onClick={save}> {btntext} </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-7">
                    <table align="center" className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Full Name</th>
                                <th>Mobile No</th>
                                <th>Age</th>
                                <th>Education</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td> {index} </td>
                                            <td> {user.name} </td>
                                            <td> {user.mobile} </td>
                                            <td> {user.age} </td>
                                            <td> {user.edu} </td>
                                            <td>
                                                <button onClick={editUser.bind(this, user, index)}> Edit </button>
                                            </td>
                                            <td>
                                                <button onClick={deleteUser.bind(this, index, user.name)}> Delete </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Hook2;