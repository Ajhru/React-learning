import React, { useState, useContext } from "react";
import UserContext from "../Context/usercontext";


function Login() {

    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")

    const { setuser } = useContext(UserContext)

    let submitHandle = (e) => {
        e.preventDefault()
        setuser({ username, password })
    }

    return (
        <>
            <h2>Login</h2>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            {""}
            <input type="text" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
            <button onClick={submitHandle}>Submit</button>
        </>
    )
}

export default Login;