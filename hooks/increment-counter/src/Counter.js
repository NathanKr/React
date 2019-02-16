import React , {useState} from 'react';

const Counter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div>
            <button onClick={() => setCount1(count1+1)} >Increment</button>            
            <p>counter1 : {count1}</p>
            <button onClick={() => setCount2(count2+1)} >Increment</button>            
            <p>counter2 : {count2}</p>
        </div>
    );
};

export default Counter;