import React from 'react';
const Input = ({name="id",icon,type="text",placeholder=""}) => {


  
    return ( 
        <>
             <div className="input-group">
                <input
                  id= {name}
                  type={type}
                  className="form-control"
                  placeholder={placeholder}
                />
              
                  <div className="input-group-text">
                    <span className={icon} />
                  </div>
               
              </div>

        </>
     );
}
 
export default Input;