import React from "react";
const Main = () => {
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="from-group col-sm-6">
          <div className="form-group">
            <label htmlFor="name">ชื่อ</label>
            <input
              name="name"
              id="name"
              placeholder="ระบุชื่อ"
              className="form-control"
            />
          </div>
          </div>
          <div className="from-group col-sm-6">
            <div className="form-group ">
              <label htmlFor="name">สกุล</label>
              <input
                name="name"
                id="name"
                placeholder="ระบุสกุล"
                className="form-control"
              />
            </div>
          </div>
          <div className="from-group col-sm-6 mt-1">
          <div className="form-group">
            <label htmlFor="name">เลขบัตร</label>
            <input
              name="name"
              id="name"
              placeholder="เลขที่ับัตร"
              className="form-control"
            />
          </div>
          </div>
        </div>

        <div className="row">
          <div className="form-group  col-sm-6 mt-2 ">
            <select className="form-select" aria-label="Default select example">
              <option selected>จังหวัด</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
          <div className="form-group  col-sm-6 mt-2 ">
            <select className="form-select" aria-label="Default select example">
              <option selected>อำเภอ</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>

          <div className="form-group  col-sm-6 mt-2 ">
            <select className="form-select" aria-label="Default select example">
              <option selected>ตำบล</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
