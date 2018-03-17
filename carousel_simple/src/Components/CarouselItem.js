import React from 'react'
import PropTypes from 'prop-types'


function CarouselItem(props)
{
    const  styleImg = {width:'100%' , height:'100%'};
    const htmlAttributes =  { ...props.htmlAttributes};
    

    return (
        <img  
        style={styleImg} 
        src={props.src} 
        alt={props.alt}  
        htmlattributes = {htmlAttributes} />
      );
}

export default CarouselItem;

CarouselItem.propTypes = {
    src : PropTypes.string,
    alt : PropTypes.string,
    htmlattributes : PropTypes.object 
}