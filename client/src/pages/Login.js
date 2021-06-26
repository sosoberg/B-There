import React from "react";

function Login() {
  return (
        <div>
            <div>
                <h2>Login</h2>
                <form>
                <div>
                    <label for="email-login">Email:</label>
                    <input type="text" />
                </div>
                <div>
                    <label for="password-login">Password:</label>
                    <input type="password"/>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
                </form>
            </div>
            
            <div>
                <h2>Signup</h2>
                <form>
                <div>
                    <label for="name-signup">Name:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label for="email-signup">Email:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label for="password-signup">Password:</label>
                    <input type="password"/>
                </div>
                <div>
                    <button type="submit">Signup</button>
                </div>
                </form>
            </div>
        </div>
  );
}

export default Login;