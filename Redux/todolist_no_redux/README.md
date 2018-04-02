
<h3>Todo list no redux</h3>

<h4>Motivation</h4>
reference to be compared with redux implementation

<h4>Main components</h4>
<table border=1>
  <tr>
    <th>Name</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>ToDoList</td>
    <td>this is the root component it. has state : the list of todos and option selected</td> 
  </tr>
  <tr>
    <td>AddToDo</td>
    <td>This add todo. has state todoDescription which share between its element. add item to todo list via function prop</td> 
  </tr>
  <tr>
    <td>ShownTodoList</td>
    <td>This show the list according to the selected option , both are recived via props. has no state.</td> 
  </tr>
  <tr>
    <td>FilterToDoList</td>
    <td>This let the user choose option : all , completed , active. has no state. i was forced to move its option state to ToDoList because it was needed also in ShownTodoList</td> 
  </tr>
</table>

<h4>Specific packages installation</h4>
<ul>
<li>npm install prop-types</li>
</ul>




