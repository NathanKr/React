

<h3>This is a GENERIC PURPOSE form </h3>

<a href='https://www.youtube.com/watch?v=uSCW5rzTlN0'>Click for Quick Preview</a>    


<h4>Sample usage</h4>
    <p>a form to register a person is used to demonstrate the Form Design</p>
  
  <h4>Person</h4>
    person has 5 properties :
  <table border=1>
  <tr>
    <th>Name</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>name</td>
    <td>html input with type='text' is used</td> 
  </tr>
  <tr>
    <td>password</td>
    <td>html input with type='password' is used</td> 
  </tr>
  <tr>
    <td>Biography</td>
    <td>html textarea is used</td> 
  </tr>
  <tr>
    <td>Gender</td>
    <td>html select is used</td> 
  </tr>  
  <tr>
    <td>has social security</td>
    <td>html with type='checkbox' is used</td> 
  </tr>  
</table>
  
  <h4>Form component</h4>
Basically no matter which form is needed it can be done using Form component and its props
  
<h5>Component</h5>
<ol>  
  <li>can have few Input , all configured in an arInputLogic array as props</li>
  <li>iterate arInputLogic to elegantly create the form</li>  
</ol>  

<h5>Props</h5>
<table border=1>
  <tr>
    <th>Name</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>arInputLogic</td>
    <td>array of InputLogic , each for Input element</td> 
  </tr>
  <tr>
    <td>isFormValid</td>
    <td>function which return true if form is valid and false otherwise</td> 
  </tr>
  <tr>
    <td>handleSubmit</td>
    <td>function which is invoked when submit button is clicked (provided disabled is false</td> 
  </tr>
</table>  
  
<h4>state</h4>
    state plays a crucial part in React in general and in this design in particular :
<ol> 
  <li>person properties is stored in state</li>
  <li>state is set in per input inputChangeHandler</li>
  <li>state is get in isFormValid , handleSubmit</li>
</ol>



<h4>Input component</h4>
    Input is a component which has two html elements :
  <ol>
    <li> input (it apply to text , password and also submit) or textarea or select</li>
    <li> label</li>
  </ol>

  <h4>Style</h4>
All styling is done inline in Input.js because i do not use css module


<h4>Input Props </h4>
<table border=1>
  <tr>
    <th>Name</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>inputType</td>
    <td>input , textarea , select</td> 
  </tr>
  <tr>
    <td>labelText</td>
    <td>this is the text of the html label element</td> 
  </tr>
  <tr>
    <td>htmlInputAttributes</td>
    <td> : these are the attributes of the html input element which give 
                           a lot of flexibility. e.g. type can be used for html input</td> 
  </tr>
  <tr>
    <td>inputChangeHandler</td>
    <td>html input\textarea\select change handler , has upper level state which has the
                           input value</td> 
  </tr>
  <tr>
    <td>validationErrorHandler </td>
    <td>function which return validation error for this input
    - isFormValid : function which return is form valid</td> 
  </tr>
  <tr>
    <td>content</td>
    <td>extra info used currently only for select :  array holding list of options</td> 
  </tr>
</table>   

<h4>Limitation </h4>
    i have tested it on chrome only using :
  <ol>
       <li>input : text , password , checkbox</li>
        <li>select</li>
        <li>textarea</li>
  </ol>

<h4>Validation </h4>
  <ol>
    <li>each Input component (beside submit button) has an html p element which is used for validation error</li>
    <li>the submit button is disabled until the form is valid (via props.isFormValid of Form)</li>
   <li>the submit button change is color according to the value of isFormValid</li>
</ol>

