import React from 'react';

function Book(props) {
        return <div>
            <p>{props.name}</p>
            <p>{props.numPages}</p>
            <p>{props.isNew ? 'New' : 'Used'}</p>
            </div>;
}

export default Book;

