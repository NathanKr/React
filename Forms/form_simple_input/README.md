Input 
------

Input is a component which has two html elements :
    - input 
    - label


All styling is done inline in Input.js because i do not use css module

Props 
    - labelText : this is the text of the html label element
    - htmlInputArguments : these are the attributes of the html input element which give 
                           a lot of flexibility. e.g. type can be used  
    - inputChangeHandler : html input change handler , has upper level state which has the
                           input value                            


Limitation 
    it is working with type='text' and type='password'
    i have tested it also with type 'checkbox' and it is not working because evt.target.value does not fit.
    In this case evt.target.value.checked might fit but it requires some small code change which is possible 
    because type is known


Todo
    - handle not working input type like checkbox
    - handle non html input like textarea , select    
    - use Form component
    - create the form components instances using loop over array of objects
    - handle validation : 
        - show error indication per input
        - change submit button color based on overall form validation
        - do not allow submit based on overall form validation