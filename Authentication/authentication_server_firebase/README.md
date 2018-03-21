<h3>Authentication against server firebase</h3>

<h4>Motivation</h4>
<p>A simple skeleton for every react base application which uses authentication. this sample authenticate vs firebase but adjusting it to other server will not be dificult</p>

<h4>Components</h4>
 <table border=1>
    <tr>
      <th>Name</th>
      <th>Desciption</th>
    </tr>
    <tr>
      <td>App</td>
      <td>this host the routing</td>
    <tr>
    <tr>
      <td>Home</td>
      <td>Home page , all users can see this page</td>
    <tr>
     <tr>
      <td>SignCommon</td>
      <td>put here 99% of the code in SignIn and SignUp components</td>
    <tr>
      <tr>
      <td>SignIn</td>
      <td>sign in page with email and password. save token in local storage</td>
    <tr>
       <tr>
      <td>SignUp</td>
      <td>sign up page with email and password</td>
    <tr>
      <tr>
      <td>SignOut</td>
      <td>sign out page </td>
    <tr>
    <tr>
      <td>OnlyAuthenticated</td>
      <td>only authnticated users can see this page </td>
    <tr>
  </table>

<h4>App States</h4>
<table border=1>
    <tr>
      <th>state name</th>
      <th>state desciption</th>
    </tr>
    <tr>
      <td>auth</td>
      <td>token we get from firebase after success sign in \ sign up</td>
    <tr>
</table>    

<h4>Routing</h4>
<p>main menu allows to navigate to each component according to the auth state</p>



<h4>Specific package installation</h4>
<ol>
  <li>npm install react-router react-router-dom</li>
  <li>npm install axios</li>
  <li>npm install prop-types</li>
  <li>firebase project with user\password authentication is required</li>
</ol>


