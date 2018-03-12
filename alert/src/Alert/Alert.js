import React , { Component } from 'react'
import PropTypes from 'prop-types'

class Alert extends Component
{
    btnClickHandler = () => {
        this.props.hideHandler();
    }

    render() {
        const styleDiv = { 
        transition : 'display 2s',
        display : this.props.show ? 'block' : 'none',
        position:'absolute' ,
        width:'200px' , height:'100px' , 
        padding:'8px' ,
        margin:'auto' , top:'200px',  left:0, right:0,
        border:'2px solid black',
        boxShadow: '2px 2px'};
        
        const styleBtnOk = {position:'absolute' , 
        bottom:0, right:0 , 
        margin:'10px', padding:'5px' , 
        width:'70px'};


        return (
            <div style={styleDiv}>
                <p>{this.props.children}</p>
                <button onClick={this.btnClickHandler} style={styleBtnOk}>Ok</button>
            </div>
            )
    }
}

Alert.propTypes = { 
    children    : PropTypes.string , 
    show        : PropTypes.bool,
    hideHandler : PropTypes.func
 }
 


export default Alert; 