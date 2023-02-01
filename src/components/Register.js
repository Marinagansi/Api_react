import axios from 'axios'
import { useEffect, useState } from 'react'
import { Form, FormGroup, Input, Label, Button, FormFeedback } from 'reactstrap'
const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [Confirmpassword, setConfirmPassword] = useState('')
    const [message,setMessage]=useState('')
    const [valid, setValid]=useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(username, password, Confirmpassword)
        axios.post('http://localhost:3005/users/register',{username, password})
        .then(response=>window.alert(response.data.status))
        
        .catch(err=>window.alert(err.response.data.err))
    }

// const handleChange=(e)=>{
//         setConfirmPassword(e.target.value)
//        
//     }
useEffect(()=>{
    if(password  !== Confirmpassword){
                    setValid('is-invalid ')
                    setMessage('Not match')
                    return
                   
                }
                setValid('is-valid')

}, [Confirmpassword,password])
    return (
        <>
            <Form>
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
                <FormGroup>
                    <Label for="Password">
                        confirm Password
                    </Label>
                    <Input className={valid}
                        id="confirmPassword"
                        name="confirm password"
                        placeholder="password placeholder"
                        type="password"
                        value={Confirmpassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    />

                    <FormFeedback className={valid}>
{message}
                    </FormFeedback>
                </FormGroup>
                <Button color='primary' onClick={handleRegister}>Register</Button>
            </Form>

        </>
    )
}

export default Register;