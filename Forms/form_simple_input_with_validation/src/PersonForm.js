import FormLogic from './UI/FormLogic'


class PersonForm{
    getFormLogic = () =>{
        const formlogic = new FormLogic();
        return formlogic;
    }
}

export default PersonForm;