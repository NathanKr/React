<h2>Increment Decrement without Redux</h2>

<h3>Motivation</h3>
reference point for the same app using Redux - <a href = 'https://github.com/NathanKr/React/tree/master/Redux/increment_decrement_with_redux'>here</a>


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
<li>Smart component - has state object with count property</li>
</ul>
</td>
<td>None</td>
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


<h3>Installation</h3>
npm install prop-types