import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Login extends Component {
constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
 }
 handleSignup(){
  this.props.history.push('/signup');
 }
 handleClick(event){
      this.props.history.push('/candidates');
       var apiBaseUrl = "http://localhost:4000/api/";
       var payload={
         "email":this.state.username,
         "password":this.state.password
       }
       axios.post(apiBaseUrl+'login', payload)
         .then(function (response) {
           console.log(response);
         if(response.data.code == 200){
           console.log("Login successfull");
         }
         else if(response.data.code === 204){
           console.log("Username password do not match");
           alert("username password do not match")
         }
         else{
           console.log("Username does not exists");
           alert("Username does not exist");
       }
       })
       .catch(function (error) {
       console.log(error);
       });
 };
render() {
    return (
      <div >
        <MuiThemeProvider>
          <div>
           <div className=" col-md-offset-5">
             <TextField
               hintText="Enter your Username"
               floatingLabelText="Username"
               onChange = {(event,newValue) => this.setState({username:newValue})}
               />
             <br/>
               <TextField
                 type="password"
                 hintText="Enter your Password"
                 floatingLabelText="Password"
                 onChange = {(event,newValue) => this.setState({password:newValue})}
                 />
               <br/>
               <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
               <RaisedButton label="signup" primary={false} style={style} onClick={(event) => this.handleSignup(event)}/>
            </div>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};