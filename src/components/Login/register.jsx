import React, { useEffect, useState } from "react";
import Input from "../common/useform/input";
import Button from "../common/button";
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import Select from "../common/useform/select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fname: yup.string().required("ระบุชื่อ ผู้ใช้งาน"),
  lname: yup.string().required("ระบุสกุล"),
  account: yup.string().required("ระบุ account"),
  password: yup.string().required("ระบุ password"),
  fdrivenprov: yup
    .number()
    .positive()
    .integer()
    .required()
    .min(1, "กรุณาระบุจังหวัด"),
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

  const [list, setlist] = useState([{ account: "amnuay" }]);
  const fristProvincelist = [
    { _id: 0, name: "เลือกจังหวัด" },
    { _id: 1, name: "ปราจีนบุรี" },
    { _id: 2, name: "กทม" },
  ];
  const onSubmit = async (data) => {
    alert(JSON.stringify(data));
    alert("success");
  };

  useEffect(() => {
    if (list.length > 0) {
      reset({
        account: list[0].account,
      });
    }
  }, [reset, list]);

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
                <div className="mb-4">
                  <Select
                    errors={errors.fdrivenprov}
                    list={fristProvincelist}
                    placeholderlabel="จังหวัด"
                    {...register("fdrivenprov")}
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="typename">วันที่ต้องการใช้งาน</label>
                  <div>
                    <Controller
                      control={control}
                      name="startdate"
                      render={({ field }) => (
                        <DatePicker
                          placeholderText="Select date"
                          className={"form-control"}
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                          dateFormat="MM-dd-yyyy"
                        />
                      )}
                    />
                  </div>
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
