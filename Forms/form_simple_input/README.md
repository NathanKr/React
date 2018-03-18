<!DOCTYPE html>
<html>
<body>


<h3>Component elements</h3>
Input is a component which has two html elements :
<ol>    
  <li>input</li>
  <li>label</li>
</ol>

  <h3>Styling</h3>
All styling is done inline in Input.js because i do not use css module
<br/><br/>

  <h3>Props</h3> 
  
  <table border="1">
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>labelText</td>
    <td>this is the text of the html label element</td>
  </tr>
  <tr>
    <td>htmlInputArguments</td>
    <td>these are the attributes of the html input element which give
                           a lot of flexibility. e.g. type can be used</td>
  </tr>
  <tr>
    <td>inputChangeHandler</td>
    <td>html input change handler , has upper level state which has the
                           input value</td>
  </tr>
</table>
 
<h3>Limitation</h3>
  <ol>
    <li>it is working with type='text' and type='password'</li>
    <li>i have tested it also with type 'checkbox' and it is not working because evt.target.value does not fit.
    In this case evt.target.value.checked might fit but it requires some small code change which is possible 
    because type is known</li>
  </ol>    
    

<h3>Todo</h3>

  <ol>
    <li>handle not working input type like checkbox</li>
    <li>use Form component</li>
    <li>create the form components instances using loop over array of objects</li>
    <li>handle validation</li>
    <li>show error indication per input</li>
    <li>change submit button color based on overall form validation</li>
    <li>do not allow submit based on overall form validation</li>
  </ol>

</body>
</html>