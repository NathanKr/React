import React, { Component } from 'react';
import './App.css';import axios from 'axios'

class App extends Component {
 baseUrl = 'https://react-course-backend-53cce.firebaseio.com';
 index = 0;
 firbaseAddOn = '.json';
 state = {error:''};

 getCommon = (posts_or_blogs) => {
   // -- json add because it is firebase
  const url=this.baseUrl+'/'+posts_or_blogs+this.firbaseAddOn; 

  axios.get(url).then(response =>{
    this.index++;
    console.log(response);
   }).catch(err => {
    console.log(err);
    this.setState({error:err});
     });
  };

 sendCommon = (posts_or_blogs) => {
  const url=this.baseUrl+'/'+posts_or_blogs+this.firbaseAddOn; 
  const objData = {Title        : posts_or_blogs+' title'+this.index ,
                   Description  : posts_or_blogs+' description'+this.index };

  axios.post(url,objData).then(response =>{
    this.index++;
    console.log(response);
   }).catch(err => {
      console.log(err);
      this.setState({error:err});
     });
  };

  sendPost = () =>{
    this.sendCommon('posts');
  }

  sendBlog = () =>{
    this.sendCommon('blogs');
  }

  getBlogs = () =>{
    this.getCommon('blogs');
  }

  getPosts = () =>{
    this.getCommon('posts');
  }

  

  render() {
   return (
     <div className="App">
       <h2>Data is saved on Firebase's NoSQL Realtime Database</h2>
       <h3>click button and check result (data) in console</h3>
       <button onClick={this.sendPost}>Send Post</button>
       <button onClick={this.sendBlog}>Send Blog</button>
       <button onClick={this.getPosts}>Get Posts</button>
       <button onClick={this.getBlogs}>Get Blogs</button>
       <p style={{color:'red'}}>{this.state.error ? JSON.stringify(this.state.error) : ''}</p>
     </div>
   );}}
export default App;




