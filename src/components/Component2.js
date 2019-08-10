import React from 'react';


const  Component2 =(props)=>{
  return (
    <div className='component2'>
      <div>
      	<input type='text' value={props.textC2} onChange={props.onC2TextChange}/>	
      </div>
     
      <div className='buttons-area'>
        <div>
        	<button onClick={()=>props.sendDataOverTOC1(props.response)}> Send Data Over to C1</button>
        </div>
      </div>
       <div>
      	<p>Result : {props.response.data}{props.response.error}</p>
      </div>
    </div>
  );
}

export default Component2;
