
<h3>Todo list no redux</h3>

<h4>Motivation</h4>
reference to be compared with redux implementation

<h4>Main components</h4>
<table border=1>
  <tr>
    <th>Name</th>
    <th>Description</th> 
    <th>State</th>
    <th>Props</th>
  </tr>
  <tr>
    <td>ToDoList</td>
    <td>this is the root component it</td> 
    <td>the list of todos and option selected</td>
    <td>non</td>
  </tr>
  <tr>
    <td>AddToDo</td>
    <td>This add todo</td> 
    <td>todoDescription which share between its element</td>
    <td>add item to todo list via function prop</td>
  </tr>
  <tr>
    <td>ShownTodoList</td>
    <td>This show the list according to the selected option</td> 
    <td>none</td>
    <td>list and selcted option</td>
  </tr>
  <tr>
    <td>FilterToDoList</td>
    <td>This let the user choose option : all , completed , active. i was forced to move its option state to ToDoList because it was needed also in ShownTodoList</td> 
    <td>none</td>
    <td>selected option index and function to set it</td>
  </tr>
</table>

<h4>Specific packages installation</h4>
<ul>
<li>npm install prop-types</li>
</ul>




