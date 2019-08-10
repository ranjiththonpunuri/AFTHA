import React from 'react';
import Component1 from '../components/Component1'
import Component2 from '../components/Component2'
import {getData}  from '../httprequests/GetRequests'
 
class AppContainer extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      textC1:'www.placeholder.com',
      textC2:'',
      responseC2:'',
      responseC1:''
    }
  }
  //Sending API Response data for Component2 to Component1
  sendDataOverTOC1=(responseC2)=>{
     this.setState({responseC1:responseC2})
  }
  //Send text to Component2 text field from Component1 text Field
  sendTextToC2=()=>{
    this.setState({textC2:this.state.textC1})
  }
   //Changing Component2 text field data along with Component1 text field data
  onC2TextChange=(event)=>{
    this.setState({textC2:event.target.value,textC1:event.target.value})
  }
  //API Request
  getData=()=>{
    getData(this.state.textC1,(response)=>{
      if(response=='Request Failed')
       this.setState({responseC2:{data:'',error:response}})
      else
        this.setState({responseC2:{data:response.fact,error:''}})
    })
  }

  render(){
    return(
        <div className='app-container'>
          <div className='column-left'>
          </div>
          <div className='column-center'>
          <Component1 textC1={this.state.textC1} sendTextToC2={this.sendTextToC2} getData={this.getData} response={this.state.responseC1  }/>
          <Component2 textC2={this.state.textC2} sendDataOverTOC1={this.sendDataOverTOC1} onC2TextChange={this.onC2TextChange} response={this.state.responseC2}/>
          </div>
          <div className='column-right'>
          </div>
        </div>
      );
  }
}

export default AppContainer;
