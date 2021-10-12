import React, { useEffect, useState } from "react";
import Button from "../common/button";

import Select from "../common/useform/select";
import { useForm, Controller } from "react-hook-form";
import Input from "../common/useform/input";
import FontAwesome from "react-fontawesome";
import DatePicker from "react-datepicker";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  remark: yup.string().required("กรุณาระบุเหตุผล"),
  fname: yup.string().required("กรุณาระบุชื่อ"),
  lname: yup.string().required("กรุณาระบุสกุล"),
});

const Register = ({
  button1,
  isOpen,
  header,
  onCancel,
  onconfirm,

  list,
}) => {
  

  const [gatelist, setgatelist] = useState([]);
  const [cartypelist, setcartypelist] = useState([]);
  const [fristProvincelist, setFristProvincelist] = useState([]);
  const [secondProvincelist, setSecondProvincelist] = useState([]);
  const [enabled, setenabled] = useState(true);
  const [nowDate, setNowDate] = useState(new Date());
  const [openUpload, setopenUpload] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });

  const handleImageClick = () => {};

  const onSubmit = (data) => {
    console.log("data=", data);
  };

  return (

    <div className="row justify-content-center">
    <div className="col-lg-4 mt-4">
      <div className="card card-outline card-primary">
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        {/* <div className="row">
          <div className="col-sm-6 col-xs-12">
            <div className="form-group">
              <Select
                label="พื้นที่"
                errors={errors.GateId}
                list={gatelist}
                placeholderlabel="select area"
                {...register("GateId")}
              />
            </div>
          </div>

          <div className="col-sm-6 col-xs-12">
            <div className="form-group">
              <Input
                label="เหตุผลในการขอ"
                name="remark"
                register={register}
                placeholder="ระบุเหตุผล"
                required
                errors={errors.remark}
              />
            </div>
          </div>
        </div> */}
      
        {/* <div className="card text-center border-secondary">
          <div className="card-mb-4 d-flex align-items-center justify-content-center h-100 bg-warning">
            <FontAwesome name="truck"> </FontAwesome> วันเวลา
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="typename">วันเวลาที่จะเข้า</label>
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
                          showTimeSelect
                          timeFormat="HH:mm"
                          timeIntervals={15}
                          timeCaption="time"
                          dateFormat="MM-dd-yyyy h:mm"
                        />
                      )}
                    />
                  </div>
                </div>

                {errors.startdate && (
                  <div className="alert alert-danger">
                    {errors.startdate.message}
                  </div>
                )}
              </div>

              <div className="col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="typename">วันเวลาที่จะออก</label>
                  <div>
                    <Controller
                      control={control}
                      name="enddate"
                      render={({ field }) => (
                        <DatePicker
                          placeholderText="Select date"
                          className={"form-control"}
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                          showTimeSelect
                          timeFormat="HH:mm"
                          timeIntervals={15}
                          timeCaption="time"
                          dateFormat="MM-dd-yyyy h:mm"
                        />
                      )}
                    />
                  </div>
                </div>
                {errors.endtdate && (
                  <div className="alert alert-danger">
                    {errors.endtdate.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div> */}
        <div className="mt-1"></div>

        <div className="card text-center border-secondary  ">
          <div className="card-mb-4 d-flex align-items-center justify-content-center h-100 bg-info">
            <FontAwesome name="user"> </FontAwesome> ผู้ใช้งาน
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <Input
                  
                    placeholder="account"
                    name="account"
                    register={register}
                    required
                    errors={errors.account}
                  />
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <Input
                   
                    name="password"
                    register={register}
                    required
                    placeholder="password"
                    errors={errors.password}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <Input
                   
                    name="confirmpassword"
                    register={register}
                    required
                    placeholder="confirmpassword"
                    errors={errors.confirmpassword}
                  />
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="form-group">
                  <Input
                    label="เลขบัตรคนขับ"
                    name="drivenno"
                    register={register}
                    required
                    placeholder="ระบุ รหัสพนักงาน/เลขบัตร"
                    errors={errors.drivenno}
                  />
                </div>
              </div>

              <div className="col-sm-6 col-xs-12">
                <div className="form-group"></div>
              </div>
            </div> */}
          </div>
        </div>

      
        {/* <div className="card text-center border-secondary">
          <div className="card-mb-5 d-flex align-items-center justify-content-center h-100 bg-secondary">
            <FontAwesome name="truck"> </FontAwesome> ข้อมูลรถ
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="form-group">
                  <Select
                    errors={errors.cartypeid}
                    list={cartypelist}
                    placeholderlabel="ระบุประเภทรถ"
                    {...register("cartypeid")}
                  />
                </div>
              </div>

              <div className="col-sm-6 col-xs-12"></div>
            </div>

            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="form-group">
                  <Input
                    name="fdrivenno"
                    register={register}
                    required
                    errors={errors.fdrivenno}
                    placeholder="ระบุ ทะเบียนหัว"
                  />
                </div>
              </div>

              <div className="col-sm-6 col-xs-12">
                <div className="form-group mt-4">
                  <Select
                    errors={errors.fdrivenprov}
                    list={fristProvincelist}
                    placeholderlabel="จังหวัด"
                    {...register("fdrivenprov")}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="form-group">
                  <Input
                    name="ldrivenno"
                    register={register}
                    required
                    errors={errors.ldrivenno}
                    placeholder="ระบุทะเบียนหาง"
                  />
                </div>
              </div>

              <div className="col-sm-6 col-xs-12">
                <div className="form-group mt-4">
                  <Select
                    list={secondProvincelist}
                    placeholderlabel="จังหวัด"
                    {...register("ldrivenprov")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Button label ={"register"} onClick={handleSubmit(onSubmit)}></Button>
      </div>
    </form>
    </div>
    </div>
    </div>
  );
};

export default Register;
