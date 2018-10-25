import React , { Component } from 'react'
import PropTypes from 'prop-types'

class Alert extends Component
{
    static getInfo(){
        return "info";
    }

    static getError(){
        return "error";
    }

    static getSuccess(){
        return "success";
    }

    btnClickHandler = () => {
        this.props.hideHandler();
    }

    static getTextColor(status)
    {
        let color;
        switch(status)
        {
            case Alert.getSuccess() :
            color = 'green';
            break;

            case Alert.getError() :
            color = 'red';
            break;

            default: // getInfo()
            color = 'blue';

        }

        return color
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
        boxShadow: '3px 3px'};
        
        const styleBtnOk = {
        position:'absolute' , 
        bottom:0, right:0 , 
        margin:'10px', padding:'5px' , 
        width:'70px',
        border: 'none',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '4px',
        backgroundColor:Alert.getTextColor(this.props.status),
        display: 'inline-block'};

        const styleP = {fontWeight : 'bold' , color:Alert.getTextColor(this.props.status)};

        return (
            <div style={styleDiv}>
                <p style={styleP}>{this.props.children}</p>
                <button onClick={this.btnClickHandler} style={styleBtnOk}>ESC   </button>
            </div>
            )
    }
}

Alert.propTypes = { 
    children    : PropTypes.string , 
    show        : PropTypes.bool,
    hideHandler : PropTypes.func,
    status      : PropTypes.string
 }
 


export default Alert; 