import React from 'react';
import { Link} from 'react-router-dom';


function TopMenu(){
    return (
    <div>
    <Link to={'/'}>Home</Link>
    <Link to={'/AddBook'}>Add Book</Link>
    <Link to={'/Books'}>Books</Link>    
    <Link to={'/History'}>History</Link>   
    </div>
    );
}

export default TopMenu;