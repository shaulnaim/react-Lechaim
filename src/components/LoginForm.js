import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { login } from '../actions/appActionsCreators';

class LoginForm extends Component {
constructor(props){
  super(props);
  this.state = {};
}

 handleSignup(){
  this.props.history.push('/signup');
 }
 handleSubmit(event){
     let { email,password} = this.state;
     this.props.login(email,password); 
     this.props.history.push('/candidates');
 }
render() {
    return (
      <div >
        <MuiThemeProvider>
          <div>
           <div className=' col-md-offset-5'>
             <TextField
               hintText='Enter your Username'
               floatingLabelText='Email'
               onChange = {(event,newValue) => this.setState({email:newValue})}
               />
             <br/>
               <TextField
                 type='password'
                 hintText='Enter your Password'
                 floatingLabelText='Password'
                 onChange = {(event,newValue) => this.setState({password:newValue})}
                 />
               <br/>
               <RaisedButton label='Submit' primary={true} style={style} onClick={(event) => this.handleSubmit(event)}/>
               <RaisedButton label='signup' primary={false} style={style} onClick={(event) => this.handleSignup(event)}/>
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

const mapStateToProps = (state) => {
  return {
    isLoginSuccess: state.isLoginSuccess,
    isLoginError: state.isLoginError,
    isLoginPending: state.isLoginPending
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email,password) => dispatch(login(email,password))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);