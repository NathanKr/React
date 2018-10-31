import React from 'react';

const DefaultListItem = (props) => {
    return (
        <a href={props.href}>{props.text}</a>
    );
};

export default DefaultListItem;