import React from "react";
import Input from "../common/useform/input";
import Button from "../common/button";
import { useForm, Controller } from "react-hook-form";
import Select from "../common/select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fname: yup.string().required("ระบุชื่อ"),
  lname: yup.string().required("ระบุสกุล"),
  account: yup.string().required("ระบุ account"),
  password: yup.string().required("ระบุ password"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit  = async (data) => {
    alert(JSON.stringify(data));
    console.log("data=", data);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row justify-content-center">
          <div className="col-lg-4 mt-4">
            <div className="card card-outline card-primary">
              <div className="card-header text-center text-primary">
                <b>Welcome To </b>
                <span> Register Form </span>
              </div>
              <div className="card-body ">
                <p className="login-box-msg"></p>
               
                  <div className="mb-4">
                  <Input
                  
                  placeholder="account"
                  name="account"
                  register={register}
                  required
                  errors={errors.account}
                />
                  </div>
                  <div className="mb-4">
                  <Input
                  
                  placeholder="password"
                  name="password"
                  register={register}
                  required
                  errors={errors.password}
                />
                  </div>


                  <div className="mb-4">
                  <Input
                  
                  placeholder="ชื่อ"
                  name="fname"
                  register={register}
                  required
                  errors={errors.fname}
                />
                  </div>
               

                  <div className="mb-4">
                  <Input                
                  placeholder="สกุล"
                  name="lname"
                  register={register}
                  required
                  errors={errors.lname}
                />
                  </div>
                
                  <div className="row">
                    <div className="col-6">
                      <Button
                        label={"register"}
                        onClick={handleSubmit(onSubmit)}
                      />
                    </div>
                  </div>
             
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
