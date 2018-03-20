import React , {Component} from 'react'
import Constants from './Constants';
import axios from 'axios'
import PropTypes from 'prop-types'
import AuthStorage from '../Logic/AuthStorage'
import { Redirect } from 'react-router';

class SignCommon extends Component{
    state={email:'' , password:'', error:'' , loading:''};
    auth = null;
    
    sign = () =>{
        //signup : https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]
        //signin : https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]; 
    
    
        const url = Constants.UrlBase +
                    (this.props.isSignIn ? 'verifyPassword': 'signupNewUser') +
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
        this.sign();
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
                <input type='submit'value={this.props.isSignIn ? 'Sign In' : 'Sign Up'}/>
            </form>        
            <p>{this.state.loading}</p>
            <p style={{color:'red'}}>{this.state.error ? JSON.stringify(this.state.error) : ''}</p>
            </div>
            );
    }
}


SignCommon.propTypes = {
    setAuthState : PropTypes.func ,
    isSignIn : PropTypes.bool // -- false means signup
}

export default SignCommon;