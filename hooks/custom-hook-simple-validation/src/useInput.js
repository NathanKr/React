import {useState} from "react";

const useInput = validate => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const changeHandler = evt => {
    setValue(evt.target.value);
    setIsValid(validate(value));
  };

  return { value, isValid, changeHandler };
};

export default useInput;
