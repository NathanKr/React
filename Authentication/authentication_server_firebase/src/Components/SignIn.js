import React , {Component} from 'react'
import Constants from './Constants';
import axios from 'axios'
import PropTypes from 'prop-types'
import AuthStorage from '../Logic/AuthStorage'
import { Redirect } from 'react-router';

class SignIn1 extends Component{
    state={email:'' , password:'', error:'' , loading:''};
    auth = null;
    
    signIn = () =>{
        //signin : https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]; 
    
    
        const url = Constants.UrlBase +
                    'verifyPassword' +
                    '?key='+
                    Constants.ApiKey; // -- if not multiline then 'no-useless-concat' warning is issued
        
        const objData = { email:this.state.email, 
                          password:this.state.password , 
                          returnSecureToken:true};
         
        this.setState({error:''});                
        this.setState({loading:'Loading...'});                
        
        axios.post(url,objData).then(response =>{
          this.setState({loading:''});
          this.auth = response.data; // this is the token
          this.props.setAuthState(this.auth);
          AuthStorage.setAuth(this.auth);
          console.log(response);
         }).catch(err => {
            console.log(err);
            this.setState({loading:''});
            this.setState({error:err});
           });
        };

    onSubmitHandler = (evt) => {
        evt.preventDefault();
        this.signIn();
        console.log(this.state);
    }

    
    render()
    {
        if(this.auth)
        {
            return <Redirect to='/OnlyAuthenticated' />
        }

        return (
            <div>
            <form onSubmit={this.onSubmitHandler}>
                <input  type='email' onChange={(evt)=>{this.setState({email:evt.target.value})}} 
                        placeholder='email e.g. 2@gmail.com'/>
                <input  type='password' onChange={(evt)=>{this.setState({password:evt.target.value})}} 
                        placeholder='password e.g. 456abc'/>
                <input type='submit'value='Sign In'/>
            </form>        
            <p>{this.state.loading}</p>
            <p style={{color:'red'}}>{this.state.error ? JSON.stringify(this.state.error) : ''}</p>
            </div>
            );
    }
}


SignIn.propTypes = {
    setAuthState : PropTypes.func
}

export default SignIn1;