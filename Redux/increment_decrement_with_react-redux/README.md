<h2>Increment Decrement using react-redux</h2>

<h3>Motivation</h3>

<ul>
<li>Simple app to understand redux in react</li>
<li>Compare with this <a href='https://github.com/NathanKr/React/tree/master/Redux/increment_decrement_no_redux'> non redux but same functionality sample</a></li> so you can better grasp the difference betwwen handling the state explicitly using state object or implicitly via redux store 

</ul>

<h3>State</h3>
State has count which contains the counter value

<h3>Components</h3>
<table border="1">
<tr>
<th>Name</th><th>Description</th><th>Props</th>
</tr>
<tr>
<td>App</td>
<td>
<ul>
<li>Root component</li>
<li>Parent of IncrementDecrement</li>
<li>Smart component - uses redux store and connect</li>
<li>Has two important functions
<ul>
<li>mapStateToProps</li>
<li>mapDispatchToProps</li>
</ul>
</li>
</ul>
</td>
<td><ul><li>value - cnt</li><li>function - countHandler</li></ul></td>
</tr>
<tr>
<td>IncrementDecrement</td>
<td>
<ul>
<li>Has 4 buttons for increment\decrement of the counter</li>
<li>Dumb component</li>
<li>Shows the counter value</li>
</ul>
</td>
<td><ul><li>value - count</li><li>function - setCount</li></ul></td>
</tr>
</table>

<h3>React-redux points of interest</h3>
<table border="1">
<tr>
<th>Name</th>
<th>Description</th>
</tr>
<tr>
<td>Props passed by react-redux</td>
<td>Props defined by mapStateToProps - cnt and mapDispatchToProps - countHandler are passed to App component by react-redux</td>
</tr>
<tr>
<td>mapStateToProps</td>
<td>Maps state.count to this.props.cnt </td>
</tr>
<tr>
<td>mapDispatchToProps</td>
<td>Maps dispatch to this.props.countHandler</td>
</tr>

<tr>
<td>Provider</td>
<td>HOC used to connect redux to react</td>
</tr>
<tr>

<tr>
<td>connect</td>
<td>Function used to connect redux store to component</td>
</tr>
<tr>
<td>reducer.js</td>
<td>Defines a reducer to handle counter operation (return a new state , as any reducer does)</td>
</tr>
</table>

<h3>Installation</h3>
<ul>
  <li>npm install redux</li>
  <li>npm install react-redux</li>
  <li>npm install prop-types</li>
</ul>