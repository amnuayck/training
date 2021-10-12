import React from 'react';
import Input from '../common/input'
import Button from '../common/button'
import Select  from '../common/select';

const Login = () => {

const handleLogin = () => {
    // call api
    console.log('you click')

}




    return (
        <>
   <div className="row justify-content-center">
        <div className="col-lg-4 mt-4">
          <div className="card card-outline card-primary">
            <div className="card-header text-center text-primary">
              <b>My Project</b>
              <span> First APP </span>
            </div>
            <div className="card-body ">
              <p className="login-box-msg"></p>
              <div>
                <div className="mb-4">
                  <Input placeholder="กรุณาระบุชื่อผู้ใช้งาน" />
                </div>
                <div className="mb-4">
                  <Input placeholder="กรุณาระบุรหัสผ่าน" type="password" />
                </div>
                <div className="mb-5">
                 
                {/* <Select 
                label="เลือกสาขา"        
                />

            <Select 
                label="จังหวัด"
                search ="ค้นหา"
                /> */}
                </div>
                <div className="row">
                  <div className="col-6">
                    <Button label="Login" onClick= {handleLogin} />
                  </div>
                  <div className="col-6">
                    <Button color="yellow" label="register" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

        </>
      );
}
 
export default Login;