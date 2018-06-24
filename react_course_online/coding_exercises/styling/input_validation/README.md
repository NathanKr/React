<h2>Introduction</h2>
This is a sample for styling

<h2>Components</h2>
<table border=1>
<tr>
<th>Name</th>
<th>Description</th>
<th>Styling type</th>
</tr>
<tr>
<td>App</td>
<td>
<ul>
<li>Has two child components : Input and Validation</li>
<li>Has state representing the user input</li>
</ul>
</td>
<td>
external css
</td>
<tr>
<td>Input</td>
<td>Used for user input</td>
<td>external css</td>
<tr>
<td>Validation</td>
<td>Used for validation</td>
<td>Inline styling</td>
<tr>
</table>


<h2>Challenge</h2>
currently the validation rule - length > 4 is hard coded inside Validation component. Improve the code so Validation get the validation rule from its parent