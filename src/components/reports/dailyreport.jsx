import React from 'react';
import Input from '../common/input'
import Button from '../common/button'

const DailyReport = () => {
    return ( 
<>
<div className="row justify-content-center">
        <div className="col-lg-4 mt-4">
          <div className="card card-outline card-primary">
            <div className="card-header text-center text-primary">
              <b>Report  </b>
              <span>  </span>
            </div>
            <div className="card-body ">
<div className="mb-4">
<Input placeholder="ใส่ข้อมูลที่ต้องการ" />
</div>

<Button label ="ค้นหา"/>

</div>
</div>
</div>
</div>
</>

     );
}
 
export default DailyReport;