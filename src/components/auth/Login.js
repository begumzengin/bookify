import React, {useState} from 'react'

const Login = () => {

  const styles = {
    logincard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "8px",
      backgroundColor: "#f7d8df",
      marginRight: "30%",
      marginLeft: "30%",
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <div className="styles.logincard">
      <form>
        <h2>log in to your bookify account</h2>
            <span>
              <input type="email" value={email}/>
            </span>
            <br/>
            <span>
              <label>password </label>
              <input type="password"  placeholder="password" value={password}/>
            </span>
        
      </form>
      </div>
    </> 
  );
}

export default Login