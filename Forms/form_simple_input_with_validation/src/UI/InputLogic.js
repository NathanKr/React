class InputLogic{
    inputChangeHandler = null;
    labelText = '';
    htmlInputArguments = null;

    constructor(inputChangeHandler,labelText,htmlInputArguments,validationErrorHandler)
    {
        this.inputChangeHandler = inputChangeHandler;
        this.labelText = labelText;
        this.htmlInputArguments = htmlInputArguments;
        this.validationErrorHandler = validationErrorHandler;
    }
}

export default InputLogic;