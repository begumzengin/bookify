import React, {useState} from 'react'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form>
        <h1>log in to your bookify account</h1>
        <input type="email" placeholder="email" value={email}/>
        <br/>
        <input type="password" placeholder="password" value={password}/>
      </form>
        
    </div> 
  );
}

export default Login