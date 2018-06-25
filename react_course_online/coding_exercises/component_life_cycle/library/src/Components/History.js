import React from 'react';
import './History.css';

function History(props){
    const elementsHistory = props.listOperations.map( (history , index) => {
        return <tr key={index}>
            <td>{index}</td>
            <td>{history.id}</td>
            <td>{history.datetime}</td>
            <td>{history.type}</td>
            <td>{history.name}</td>
            <td>{history.numPages}</td>
            <td>{history.isNew ? 'New' : 'Used' }</td>
        </tr>
    });
    return <div className = 'History'>
        <h3>History</h3>
        <table>
        <thead>
            <tr>
                <th>Index</th>
                <th>Book Id</th>
                <th>Datetime</th>
                <th>Type</th>
                <th>Name</th>
                <th># Pages</th>
                <th>Is new</th>
            </tr>
        </thead>
        <tbody>
            {elementsHistory}
        </tbody>
        </table>    
        </div>;
}

export default History;
