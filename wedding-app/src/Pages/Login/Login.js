import React from 'react';
const Login = () => {
  return (
    <div>
      <br/>
      <h2>Login</h2>
      {  <div class="aboutcontent">
        Enter your log in details here.
            <div class="form-group">
              <label for=""></label>
              <input type="username" class="form-control" name="" id="" placeholder="Username"></input>
            </div>
            <div class="form-group">
              <label for=""></label>
              <input type="password" class="form-control" name="" id="" placeholder="Password"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>}
    </div>
  );
};

export default Login;