import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, Input, Label, Button, FormFeedback } from 'reactstrap'
import userService from '../services/userService'
function Login(){
    const [username,setUsername]=useState('')
    const [password, setPassword] = useState('')

    const navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(username, password)
        userService.login({username, password})
        .then(res=>{
            console.log(res.data)
            window.localStorage.setItem('token',res.data.token)
            window.alert(res.data.status)
            navigate('/home')
        }).catch(err=>window.alert(err.response.data.err))
    }
    return(
        <div>
            <h2> Login Form</h2>
            <Form onSubmit={handleLogin}>
            <FormGroup>
                    <Label for="username">
                        username
                    </Label >
                    <Input
                        id="username"
                        name="username"
                        placeholder="enter username"
                        type="username"
                        value={username}

                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">
                        Password
                    </Label>
                    <Input
                        id="Password"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <Button color='primary' onClick={handleLogin}>Login</Button>
            </Form>
        </div>
    )
}

export default Login;