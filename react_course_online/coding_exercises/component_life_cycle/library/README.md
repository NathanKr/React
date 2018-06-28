<h2>Introduction</h2>
This is a sample for component life cycle

<h2>Components</h2>
<table border=1>
<tr>
<th>Name</th>
<th>Description</th>
<th>Stateless \ Stateful</th>
</tr>

<tr>
<td>Library</td>
<td>
<ul>
<li>Root component</li>
<li>Has child components</li>
<li><ul>
<li>AddBook</li>
<li>Books</li>
<li>History</li>
</ul></li>
<li>State 
<ul>
<li> listBooks</li>
<li> listOperations</li>
<li> lastBookId</li>
</ul>
</li>
</ul>
</td>
<td>
Stateful
</td>
<tr>

<tr>
<td>Books</td>
<td>Show books properties and edit\delete buttons per book</td>
<td>Stateless</td>
</tr>

<tr>
<td>Book</td>
<td>Show book properties</td>
<td>Stateless</td>
</tr>

<tr>
<td>AddBook</td>
<td>
<ul>
<li>Add book : id(auto incremented) , name , numPages ,isNew</li>
<li>State : isExpanded</li>
</ul>
</td>
<td>Stateful</td>
</tr>


<tr>
<td>History</td>
<td>Show history of operations on book
<ul>
<li>id</li>
<li>datetime</li>
<li>type :  created, deleted , edited</li>
<li>book properties</li>
</ul>
</td>
<td>Stateless</td>
</tr>
</table>


<h2>Restriction</h2>
History of operations should be implemented using component life cycle hooks for flexible design

<h2>Assumptions</h2>
No need to handle persistence
