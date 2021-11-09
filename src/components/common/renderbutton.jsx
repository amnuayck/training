import React from 'react';

const RenderButton = ({ disabled =false,label, onClick, className, value, key ,style }) => {

    return (
      <button key={key} type="button" 
      disabled ={disabled}
      style={{
         borderWidth:1,
         alignItems:'center',
         justifyContent:'center',
         width:60,
         height:60,
        borderRadius:100,
      }}
      onClick={onClick} value={value}
       className={className +" m-1" } >
        {label}
      </button>
    );
  };
  
  export default RenderButton;
  