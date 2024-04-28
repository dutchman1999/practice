import { useState, useEffect } from "react";

const SignIN = () => {
    let [totalUserData, setTotalUserData] = useState([]);
    let [eEmail, setEEmail] = useState('');
    let [ePassword, setEPassword] = useState('');

    useEffect(() => {
        console.log(totalUserData);
    }, [totalUserData]);

    const signInToHome = async () => {
        let url = 'http://localhost:1235/newPII';
        try {
            const response = await fetch(url);
            const allUserData = await response.json();
            setTotalUserData(allUserData);
            
            for (let userData of allUserData) {
                let existingEmail = userData.email;
                let existingPassword = userData.password;
                if (existingEmail !== '' && existingPassword !== '') {
                    if (existingEmail === eEmail && existingPassword === ePassword) {
                        alert('Login Successful');
                    } else {
                        alert('Credentials do not match');
                    }
                } else {
                    alert('Please enter email and password');
                }
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    return (
        <div className="signInForm">
            <h1> Please Sign-In </h1>
            <input type="email" placeholder="Enter your email" onChange={e => { setEEmail(e.target.value) }} value={eEmail} />
            <input type="password" placeholder="Enter your password" onChange={e => { setEPassword(e.target.value) }} value={ePassword} />
            <button onClick={signInToHome}> Sign-In</button>
        </div>
    )
}
export default SignIN;
