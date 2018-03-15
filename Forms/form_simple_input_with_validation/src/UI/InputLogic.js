class InputLogic{

    constructor(inputType , inputChangeHandler,labelText,htmlInputAttributes,validationErrorHandler,content)
    {
        this.inputType = inputType;
        this.inputChangeHandler = inputChangeHandler;
        this.labelText = labelText;
        this.htmlInputAttributes = htmlInputAttributes;
        this.validationErrorHandler = validationErrorHandler;
        this.content = content;
    }
}

export default InputLogic;