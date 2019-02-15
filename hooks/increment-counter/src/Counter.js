import React , {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            
            <button onClick={() => setCount(count+1)} >Increment</button>            
            <p>counter : {count}</p>
        </div>
    );
};

export default Counter;