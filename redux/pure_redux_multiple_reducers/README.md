<h2>Pure Redux with combineReducers</h2>


<h3>Motivation</h3>
Provide sample code for pure redux with combineReducers regardless of react. 
The project is react project but no components are used

<h3>State</h3>
<table border=1>
  <tr>
    <th>Key</th>
    <th>Value</th> 
  </tr>
<tr>
<td>books</td>
<td>list of books each has properties : name ,pages </td>
</tr>
<tr>
<td>user</td>
<td>has properties : firstName ,lastName</td>
</tr>
</table>

<h3>Functionality</h3>
This sample performs three operations which are logged to the console :
<ul>
<li>Add book</li>
<li>Remove book</li>
<li>Set current user</li>
</ul>
 

<h3>Points of interests</h3>
<table border=1>
  <tr>
    <th>Point</th>
    <th>Description</th> 
  </tr>
<tr>
<td>createStore</td>
<td>argument is the root reducer , no need for initial state because it is set per reducer</td>
</tr>

  <tr>
    <td>combineReducers</td> 
    <td>
<ul>
<li>function of redux</li>
<li>return a list that map state key to reducer function</li>
<li>the reducer pay load is set to the state key that the reducer is mapped to</li>
<li>the benefit of this design is that it allow each reducer to touch only state that relate to him</li>

</ul>
</td>
  </tr>
 </table>
 


<h3>Reducers</h3>
<table border=1>
  <tr>
    <th>Function</th>
    <th>Description</th> 
    <th>payload</th> 
  </tr>
<tr>
<td>booksReducer</td>
<td>handles books actions : add book , remove book </td>
<td>book object for add , book name for remove</td>
</tr>
<tr>
<td>userReducer</td>
<td>handles user action : set current user</td>
<td>user object</td>
</tr>
</table>
 


 
<h3>Specific packages installation</h3>
<ul>
  <li>npm install redux</li>
</ul>
  
  