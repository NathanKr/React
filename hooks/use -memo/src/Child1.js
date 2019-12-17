import React from 'react';

const Child1 = ({a}) => {
    console.log('child 1 render')
    return (
        <div>
            child 1 a : {a}
        </div>
    );
};

export default Child1;