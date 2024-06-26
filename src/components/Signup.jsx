import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'


const Signup = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history = useNavigate();
    const submit =async(e)=>{
        e.preventDefault();
    
        try{
            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="Exist"){
                    alert("User Exist");
                    // history("/home",{state:{id:email}});
                }
                else if(res.data==="Doesntexist"){
                    history("/home",{state:{id:email}});
    
                }
            })
            .catch(e=>
                {alert("Wrong Details")
                console.log(e)});
    
        }
        catch(e){
            console.log(e);
    
        }
    }
  return (
    <div className='signup'>
      <h1>Signup</h1>
      <form action="POST">
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' name="" id=""/>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' name="" id=""/>
        <input type="submit" onClick={submit}/>


      </form>

      <br/>
      <p>OR</p>
      <br/>
      <Link to='/'>Login Page</Link>
    </div>
  )
}

export default Signup
