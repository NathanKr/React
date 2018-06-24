<h2>Introduction</h2>
This is a sample for advanced rendering - list and key

<h2>Functionality</h2>
<ul>
<li>Add vacation name</li>
<li>Change vacation status to completed</li>
<li>Show all vacations</li>
<li>Show active vacations</li>
<li>Show completed vacations</li>
</ul>


<h2>Components</h2>
<table border=1>
<tr>
<th>Name</th>
<th>Description</th>
<th>Type</th>
</tr>

<tr>
<td>VacationList</td>
<td>Vactions container and render them</td>
<td>Stateful</td>
</tr>

<tr>
<td>VacationListItem</td>
<td>Render single vacation in list</td>
<td>Stateless</td>
</tr>


<tr>
<td>ShownVacationList</td>
<td>Render vacations according to mode ALL | ACTIVE | COMPLETED</td>
<td>Stateless</td>
</tr>


<tr>
<td>FilterVacationList</td>
<td>Render filter buttons All  | Active | Completed</td>
<td>Stateless</td>
</tr>


<tr>
<td>FilterOption</td>
<td>Render one filter button</td>
<td>Stateless</td>
</tr>



</table>