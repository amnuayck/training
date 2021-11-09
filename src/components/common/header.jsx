import React  from "react";
import RenderButton from "./buttonGroup2";

const Headder = ({ onChange, list ,disabled =false }) => {

  if (!list) return <></>;
  return (
             <>
           <div className="row">            
                {list &&
                  list.map((item, index) => {
                    return (             
                      <div className="col-auto p-0" key={item._id}>
                        <RenderButton
                           disabled = {disabled}
                          value={item._id}
                          label={item.name}
                          onClick={() =>
                            onChange({
                              name: item.name,
                              item: item._id,
                              classname: item.classname,
                            })
                          }
                          className={item.classname}
                        />
                      </div>
                     
                    );
                  })}                    
          </div>
    </>
  );
};

export default Headder;
