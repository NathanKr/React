<h2>Motivation</h2>
Provide a tool to understand and feel component life cycle including changes introduced in version 16.3


<h2>Tool ingrediens</h2>
<ul>
  <li>Component life cycle documentation (as presented by React)</li>
  <li>Component life cycle sequence diagram (as presented by Dan Abramov)</li>
  <li>Simple UI to setup \ invoke and see which lifecycle methods is invoked in diffrent use cases :
<ul>
<li> Mount : created</li>
<li> Update : New props , setState() ,forceUpdate()</li> 
<li> Unmount : removed</li>
</ul>
</li>
</ul>

<h2>Component life cycle methods used in this project</h2>
<table border=1>
  <tr>
    <th>Method</th>
    <th>Commonly used in general</th> 
    <th>Phase</th> 
  </tr>
  <tr>
    <td>Constructor</th>
    <td>Yes</th> 
    <td>Render -> Pure with no side effects</th> 
  </tr>
 <tr>
    <td>getDerivedStateFromProps</th>
    <td>Less used</th> 
    <td>Render -> Pure with no side effects</th> 
  </tr>
 <tr>
    <td>shouldComponentUpdate</th>
    <td>Less used</th> 
    <td>Render -> Pure with no side effects</th> 
  </tr>
 <tr>
    <td>render</th>
    <td>Yes</th> 
    <td>Render -> Pure with no side effects</th> 
  </tr>
 <tr>
    <td>getSnapshotBeforeUpdate</th>
    <td>Less used</th> 
    <td>Pre commit -> Can read the DOM</th> 
  </tr>
 <tr>
    <td>componentDidMount</th>
    <td>Yes</th> 
    <td>Commit -> Can work with DOM , run side effects , schedule updated</th> 
  </tr>
 <tr>
    <td>componentDidUpdate</th>
    <td>Yes</th> 
    <td>Commit -> Can work with DOM , run side effects , schedule updated</th> 
  </tr>
 <tr>
    <td>componentWillUnmount</th>
    <td>Yes</th> 
    <td>Commit -> Can work with DOM , run side effects , schedule updated</th> 
  </tr>
</table>


<h2>Project players</h2>
<table border=1>
  <tr>
    <th>Component</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>App</th>
    <td>
    <ul>
    <li>Host Parent</li>
    <li>Allow less console logs by means of checkbox</li>
    <li>Provide links to documentation and sequence diagram</li>
    </ul>
    </th> 
  </tr>
  <tr>
    <td>Parent</th>
    <td><ul><li>Implement all life cycle methods as described before</li><li>Allow actions by buttons
<ul>
<li>setState</li>
<li>forceUpdate</li>
<li>new props to Child</li>
</ul>
<li>Allow to toggle the return value of its shouldComponentUpdate method by means of checkbox</li><ul></th> 
  </tr>
<tr>
    <td>Child</th>
    <td>Implement all life cycle methods as described before</th> 
  </tr>
</table>


<h2>Implementing life cycle methods</h2>
<li>All methods write their component and function name + arguments to the console uppon invocation</li>
<li>shouldComponentUpdate of Parent can be configured via the UI</li>
<li>getDerivedStateFromProps of Parent return updated state</li>
<li>getSnapshotBeforeUpdate of Parent return snapshot</li>


<h2>Preview</h2>
<a href='https://www.youtube.com/watch?v=fnam1yrlnU8&t=145s'>Five minutes video<a>

