this is a GENERIC PURPOSE form 
--------------------------------
Sample usage            
    a form to register a person is used to demonstrate the Form Design.
    person has 5 properties :
        - name -> html input with type='text' is used
        - password -> html input with type='password' is used
        - Biography -> html textarea is used
        - Gender -> html select is used
        - has social security -> html with type='checkbox' is used


Basically no matter which form is needed it can be done using Form component and these 3 props : 
        - arInputLogic
        - isFormValid
        - handleSubmit


state
    state plays a crucial part in React in general and in this design in particular :
        - person properties is stored in state
        - state is set in per input inputChangeHandler
        - state is get in isFormValid , handleSubmit


Form component
    - can have few Input , all configured in an arInputLogic array as props
    - iterate arInputLogic to elegantly create the form

Form Props
    arInputLogic : array of InputLogic , each for Input element
    isFormValid : function which return true if form is valid and false otherwise
    handleSubmit : function which is invoked when submit button is clicked (provided disabled is false)

Input component
    Input is a component which has two html elements :
        - input (it apply to text , password and also submit) or textarea or select
        - label


All styling is done inline in Input.js because i do not use css module


Input Props 
    - inputType : input , textarea , select
    - labelText : this is the text of the html label element
    - htmlInputAttributes : these are the attributes of the html input element which give 
                           a lot of flexibility. e.g. type can be used for html input
    - inputChangeHandler : html input\textarea\select change handler , has upper level state which has the
                           input value     
    - validationErrorHandler : function which return validation error for this input
    - isFormValid : function which return is form valid        
    - content : extra info used currently only for select :  array holding list of options                                           


Limitation 
    i have tested it on chrome only using :
        - input : text , password , checkbox
        - select
        - textarea


Validation 
    - each Input component (beside submit button) has an html p element which is used for validation error
    - the submit button is disabled until the form is valid (via props.isFormValid of Form)
    - the submit button change is color according to the value of isFormValid


    