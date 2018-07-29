import React  , {Component} from 'react';


class SearchBar extends Component{
    state = {value : ''};

    render(){
        return <div className='search-bar'>
                <input  value={this.state.value} 
                        onChange={evt => {
                            const value=evt.target.value;
                            this.setState({value});// es6
                            this.props.onSearchTermChange(value);
                            }
                        }/>
            </div>
    }
}

export default SearchBar;