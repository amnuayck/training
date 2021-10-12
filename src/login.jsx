import React from 'react';
import Input from './input'
const Login = () => {
    return (  
        <div className="row justify-content-center" >
        <div className="col-lg-4 mt-4">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <b>My Project</b>
              <span>DEMO</span>
            </div>
            <div className="card-body ">
              <p className="login-box-msg"></p>
              <form>
                <div className="mb-3">
                  <Input
                  placeholder="username"
                  name ="username"
                  icon = "bi bi-envelope-fill"
                  />
                 
                </div>
                <div className="mb-3">
              <Input
               type="password"
               placeholder="Password"
               icon = "bi bi-file-lock"
              />
               
                </div>
    
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember"> จดจำรหัสผ่าน </label>
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-6">
               
                    <button className="btn btn-primary"  > Login</button> 
              
                  </div>
                  <div className="col-6">
                    <button className="btn btn-secondary"> Close</button> 
                  </div>
    
                  </div>
                 
                </div>
              </form>
             
              <p className="mb-1"></p>
              <p className="mb-0"></p>
            </div>
          </div>
        </div>
        </div>

    );
}
 
export default Login;