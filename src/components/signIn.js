import { useState } from "react";
const SignIn = () => {
    let [userDetails, setUserDetails] = useState([]);
    let [emailID, setEmailID] = useState('');
    let [password, setPassword] = useState('');


    let url = 'http://localhost:1235/newPII';
    let inputData = { email : emailID, password: password};
    let postCallData = {
        headers:{'Content-Type':'application/json'},
        method:'put',
        body:JSON.stringify(inputData)

    }

    const postFormData = () => {
        fetch(url, postCallData)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    let getUserData = ()=>{
        fetch(url)
        .then(response=> response.json())
        .then(allUsers =>{
            setUserDetails(allUsers);
        })
        console.log(userDetails);
    }


    
    const saveData = () => {
        let inputData = {email: emailID, password: password } 
        setUserDetails([...userDetails, inputData]);
        setEmailID('');
        setPassword('');
    }
    return (
        <div className="signInForm">
            <h1> Please Sign-In/Sign-Up </h1>
            <input type="text" onChange={(e) => { setEmailID(e.target.value) }} value={emailID}  placeholder="Please enter your email" />
            <input type="text" onChange={(e) => { setPassword(e.target.value) }} value={password}  placeholder="Please enter new password" />
            <button onClick={saveData}>Create</button>
            <button onClick={postFormData}>Post to server</button>
            <button onClick={getUserData}>Show Users</button>
        </div>
    )
}
export default SignIn;