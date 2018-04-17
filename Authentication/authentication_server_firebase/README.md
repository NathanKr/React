<h3>Authentication against server firebase</h3>

<a href='https://www.youtube.com/watch?v=QJ-tABaRVEU'>Click Here for Preview</a>


<h4>Motivation</h4>
<li>build simple skeleton for every React based application which uses authentication. this sample authenticate vs firebase but adjusting it to other server will not be difficult</li>
<li>build a generic class - AuthStorage which handles persistence of auth and its expiration. with respect to AuthStorage class auth is an object that requires a key name expiresIn which is in seconds</li>
</ol>


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
      <td>sign in page with email and password. token is saved in local storage</td>
    <tr>
       <tr>
      <td>SignUp</td>
      <td>sign up page with email and password. token is saved in local storage</td>
    <tr>
      <tr>
      <td>SignOut</td>
      <td>sign out page. token is removed from local storage </td>
    <tr>
    <tr>
      <td>OnlyAuthenticated1</td>
      <td>only authnticated users can see this page </td>
    <tr>
     <tr>
      <td>OnlyAuthenticated2</td>
      <td>only authenticated users can see this page </td>
    <tr>
  </table>

<h4>App States</h4>
<table border=1>
    <tr>
      <th>state name</th>
      <th>state description</th>
    </tr>
    <tr>
      <td>auth</td>
      <td>token we get from firebase after success sign in \ sign up</td>
    <tr>
</table>    

<h4>Routing</h4>
<p>main menu allows to navigate to each component according to the auth state</p>

<h4> class AuthStorage</h4>
<ul>
  <li>local storage operation are encapsulated in the class AuthStorage</li>
  <li>AuthStorage recive setAuthState in init and use it in setAuth \ removeAuth</li>
  <li>AuthStorage start a timer in setAuth which check expiration time every 60 sec and uppon expired use setAuthState(null)</li>
  <li>AuthStorage remove the timer in removeAuth</li>
</ul>

<h4>local storage</h4>
<ul>
  <li>new token is saved to local storage on success sign in and sign up</li>
  <li>token is removed from local storage on sign out</li>
  <li>token is get from storage in componentDidMount of App component so logged in user will not have to log again in case browser was closed</li>
  <li>token in local storage is in sync with auth state</li>
</ul>

<h4>Specific package installation</h4>
<ol>
  <li>npm install react-router react-router-dom</li>
  <li>npm install axios</li>
  <li>npm install prop-types</li>
  <li>firebase project with user\password authentication is required</li>
</ol>


