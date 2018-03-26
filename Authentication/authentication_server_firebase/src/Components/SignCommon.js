import React , {Component} from 'react'
import Constants from './Constants';
import axios from 'axios'
import PropTypes from 'prop-types'
import AuthStorage from '../Logic/AuthStorage'
import { Redirect } from 'react-router';

class SignCommon extends Component{
    state={ email:this.props.isSignIn ? '2@gmail.com' : '' , 
            password:this.props.isSignIn ? '123abc' : '',
            error:'' , 
            loading:''};
    

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
          const auth = response.data; // this is the token
          const authIsNew = true;
          AuthStorage.setAuth(auth , authIsNew);
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
        if(AuthStorage.isAuthValid(this.props.auth))
        {
            return <Redirect to='/OnlyAuthenticated1' />
        }

        return (
            <div>
            <form onSubmit={this.onSubmitHandler}>
                <input  type='email' onChange={(evt)=>{this.setState({email:evt.target.value})}} 
                        placeholder='email e.g. 2@gmail.com' value={this.state.email}/>
                <input  type='password' onChange={(evt)=>{this.setState({password:evt.target.value})}} 
                        placeholder='password e.g. 123abc' value={this.state.password}/>
                <input type='submit'value={this.props.isSignIn ? 'Sign In' : 'Sign Up'}/>
            </form>        
            <p>{this.state.loading}</p>
            <p style={{color:'red'}}>{this.state.error ? JSON.stringify(this.state.error) : ''}</p>
            </div>
            );
    }
}


SignCommon.propTypes = {
    isSignIn : PropTypes.bool, // -- false means signup
    auth :  PropTypes.object
}

export default SignCommon;