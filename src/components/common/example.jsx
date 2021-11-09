import React,{ useState} from "react";
import { trucklistgroup } from "../common/datalist";
import Rederbuton from "../common/renderbutton";
const Example = () => {


    
    const [trucklist, settrucklist] = useState(trucklistgroup) 
    const handleOnClick = ({color,name,id}) => {
        const sublist =[...trucklist]
        const index = sublist.findIndex((x)=> x.classname ==="btn btn-primary")
        console.log('index: ', index)
        if (index > -1){
           sublist[index].classname= "btn btn-outline-dark";  
        }
        const subobject ={
            _id:id,name:name,classname:"btn btn-primary"
        }
        const subclick = [...trucklist]
          const index1 = subclick.findIndex((x)=> x._id === id)      
          subclick[index1]= subobject;
          settrucklist(subclick)
    }

  return (
    <>
      <div className="row">
        {trucklist &&
          trucklist.length > 0 &&
          trucklist.map((item, index) => (
            <div className="col-auto p-0" key={item._id}>
              <Rederbuton 
              label={item.name} 
              onClick={() =>
                handleOnClick({name: item.name, id:item._id,color:item.classname              
              })}
              className={item.classname} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Example;
