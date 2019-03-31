import React from 'react';

const Child2 = ({b}) => {
    console.log('child 2 render')
    return (
        <div>
            child 2 b : {b}
        </div>
    );
};

export default Child2;