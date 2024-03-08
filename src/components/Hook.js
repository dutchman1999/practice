import { useState } from "react";
const Hook = () => {
    let [student, setStudent] = useState(["Aman", "Piyush", "Neetu"]);
    let [newStudent, setNewStudent] = useState('');
    const saveData = () => {
        setStudent([...student, newStudent]);
        setNewStudent('');
    }
    return (
        <div>
            <h1> The Hook practice 1 </h1>
            <input type="text" onChange={(e) => { setNewStudent(e.target.value) }} value={newStudent} />
            <button onClick={saveData}>Save Student Name</button>
            {student.map((studentName, index) => {
                return (
                    <div>
                        <p key={index}> {studentName}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Hook;