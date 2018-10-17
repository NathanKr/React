import React , {Component} from 'react'
import {connect} from 'react-redux'
import ActionType from '../Actions/ActionType'
import CurrentBook from './CurrentBook';
import './style.css'

class Books extends Component{
    componentDidMount(){
        this.props.getBooks();
    }

    
    render(){
        if(!this.props.books){
            return <h1 className='Books'>books</h1> 
        }

        const elements = 
        <ul className='Books'>
            {this.props.books.map(book => 
            <li onClick={
                    () => this.props.setCurrentBook(book)
                } 
                key={book.name}>
                {book.name}
            </li>)
            }
        </ul>

        return <div>
                {elements}
                <CurrentBook book={this.props.currentBook}/>
               </div>
    }
}

const mapDispatchToProps =  dispatch => {
    return {
        getBooks : () => dispatch({
            type:ActionType.getBooks
        }),
        setCurrentBook : currentBook => dispatch({
            type: ActionType.setCurrentBook,
            payload : currentBook
        })
    }
}

const mapStateToProps = state => {
    return {
        books : state.books.books ,
        currentBook : state.currentBook
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Books);