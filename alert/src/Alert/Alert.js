import React , { Component } from 'react'
import PropTypes from 'prop-types'

class Alert extends Component
{
    btnClickHandler = () => {
        this.props.hideHandler();
    }

    render() {
        const styleDiv = { 
        transition : 'all 2s',
        opacity : this.props.show ? 1 : 0,
        position:'absolute' ,
        width:this.props.show ? '250px' : 0 , height: this.props.show ? '120px' : 0 , 
        padding:'8px' ,
        margin:'auto' , top: this.props.show ?  '200px' : 0  ,  left:0, right:0,
        border:'2px solid black',
        boxShadow: '2px 2px'};
        
        const styleBtnOk = {position:'absolute' , 
        bottom:0, right:0 , 
        margin:'10px', padding:'5px' , 
        width:'70px',backgroundColor: 'black',
        border: 'none',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '4px',
        display: 'inline-block'};

        const styleP = {fontWeight : 'bold'};

        return (
            <div style={styleDiv}>
                <p style={styleP}>{this.props.children}</p>
                <button onClick={this.btnClickHandler} style={styleBtnOk}>OK</button>
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