import React, {useState} from 'react'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div  >
      <form>
        <h1 className='title'>log in to your bookify account</h1>
          <div>
            <div>
              <input type="email" placeholder="email" value={email}/>
            </div>
          </div>
          <div>
            <div>
              <input type="password"  placeholder="password" value={password}/>
            </div>
        </div>
      </form>
    </div> 
  );
}

export default Login