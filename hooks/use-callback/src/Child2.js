import React , {useEffect} from 'react';

const Child2 = ({clickHandler}) => {
    useEffect(() => console.log("render Child2"));

    return (
        <div>
            Child2
            <button onClick={clickHandler}>click2</button>
        </div>
    );
};

export default Child2;