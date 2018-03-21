import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  //should be per project and private , this here is used for educational purposes only
  apiKey = 'AIzaSyCQpWjPQ8R30S2pbfUvp5uu4EqpRobaEps';
  arSign = [ 'signin' , 'signup']
  state = {email:'' , password:'',sign:this.arSign[0] , responseData:'',error:'',loading:''};

  

  sign = () =>{

    //signup : https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]
    //signin : https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]; 

    const urlBase = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/';
    const sign_in_or_up = (this.state.sign === 'signup') ? 
                          'signupNewUser' :
                          'verifyPassword';

    const url = urlBase + sign_in_or_up + '?key='+this.apiKey;

    
    const objData = { email:this.state.email, 
                      password:this.state.password , 
                      returnSecureToken:true};
     
    this.setState({error:''});                
    this.setState({loading:'Loading...'});       
    this.setState({responseData:''});        
    
    axios.post(url,objData).then(response =>{
      this.setState({loading:''});
      this.setState({responseData:response.data});        
      console.log(response);
     }).catch(err => {
        console.log(JSON.stringify(this.state.error));
        this.setState({loading:''});
        this.setState({error:err});
       });
    };
  

  
  
  render() {
    return (
      <div className="App">
      <h2>Submit and check result in console</h2>
      <h3>Users are saved on Firebase</h3>
      <form onSubmit={(evt) =>{
          evt.preventDefault();
          this.sign();
          console.log(this.state);
      }}>
         <select onChange = {(evt) =>{
            this.setState({sign:evt.target.value}) ;
         }}>
           <option value={this.arSign[0]}>Sign In</option>
           <option value={this.arSign[1]}>Sign Up</option>
         </select>
        
         <input onChange = {(evt) =>{
            this.setState({email:evt.target.value}) ;
         }} type='email' placeholder='email e.g. exp@msn.com'/>

         <input onChange = {(evt) =>{
            this.setState({password:evt.target.value}) ;
         }} type='password' placeholder='password e.g. 12xyAS , must be at least 6 characters'/>

         <input type='submit' value='Submit'/>
       </form> 
       <p>{this.state.loading}</p>
       <p style={{color:'red'}}>{this.state.error ? JSON.stringify(this.state.error) : ''}</p>    
        {this.state.responseData ? <p>localId (user id) : {this.state.responseData.localId}</p> : '' }    
      </div>
    );
  }
}

export default App;
