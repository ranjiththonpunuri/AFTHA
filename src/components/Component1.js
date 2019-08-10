import React from 'react';


const  Component1 =(props)=>{
  
  return (
    <div className='component1'>
      <div>
      	<input type='text' defaultValue={props.textC1}/>	
      </div>
      <div className='buttons-area'>
        <div>
        	<button onClick={props.sendTextToC2}> Send Text To C2</button>
        </div>
        <div>
        	<button onClick={props.getData}> Get Data</button>
        </div>
      </div>
      <div>
      	<p>Result : {props.response.data}{props.response.error}</p>
      </div>
    </div>
  );
}

export default Component1;
