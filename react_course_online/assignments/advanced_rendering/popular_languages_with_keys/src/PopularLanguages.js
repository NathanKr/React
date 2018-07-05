import React, { Component } from 'react';

class PopularLanguages extends Component{
    state = {popular_languages : [
     {name : 'JavaScript'  , projects : 2300} ,{name :  'Python' , projects : 1000} , 
     {name :  'Java' , projects : 986} ,{name :  'Ruby' , projects : 870} , 
     {name :  'PHP' , projects : 559} ,{name :  'C++' , projects : 413} , 
     {name :  'CSS' , projects : 335} ,{name :  'C#' , projects : 326} , 
      {name :  'Go' , projects : 285} ,
     {name :  'C' , projects : 239} ,{name :   'TypeScript', projects : 207} , 
     {name :  'Shell' , projects : 206} ,{name :   'Swift', projects : 107} , 
     {name :   'Scala', projects : 99} , {name :   'Objective-C', projects : 66}  
   ]};
    
     render(){
       const rows = this.state.popular_languages.map((lang,index) => {
         return (
           <tr key={lang.name} onClick={() =>{
               const newLangs = [...this.state.popular_languages];
               newLangs.splice(index,1);
               this.setState({popular_languages : newLangs});
             }}> 
             <td>{index+1}</td>
             <td>{lang.name}</td>
             <td>{lang.projects}</td>
           </tr>);
       });
          return <div>
         <h1>15 most popular programming languages on github 2017</h1>
            <h3>Click on language to remove</h3>   
         <table>
         <thead>
         <tr>
           <th>Rank</th>
           <th>Language</th>
           <th>Projects on Github [k]</th>
         </tr>
         </thead>
         <tbody>
           {rows}
         </tbody>  
       </table>
         </div>
     }
   }
   
export default PopularLanguages;