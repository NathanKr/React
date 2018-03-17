import React , {Component} from 'react';
import PropTypes from 'prop-types'
import CarouselItem from '../Components/CarouselItem'


class  Carousel extends Component
{
    state = {currentItemIndex : 0};

    render()
    {
        const item = this.props.arCarouselItemLogic[this.state.currentItemIndex];
        const arrowStyleCommon = { cursor: 'pointer' , margin : '10px' , top:'40%' , 
                                    position:'absolute' , fontSize:'200%'}; 
        const arrowStyleLeft = {...arrowStyleCommon}
        const arrowStyleRight = { ...arrowStyleCommon ,right:0 }; 
        const divStyle = {width:'100%', height:'100%', position: 'relative' };
        
        // --- increment this.state.currentItemIndex
        const rightArrowClickHandler = () => {
            const newIndex = (  this.state.currentItemIndex === 
                                (this.props.arCarouselItemLogic.length - 1)) ?
                                0 : (this.state.currentItemIndex+1);
            this.setState({currentItemIndex:newIndex});
        }

        // --- decrement this.state.currentItemIndex
        const leftArrowClickHandler = () =>{
            const newIndex = (  this.state.currentItemIndex === 0) ?
                                this.props.arCarouselItemLogic.length - 1 :
                                this.state.currentItemIndex-1;
            this.setState({currentItemIndex:newIndex})
        }
    
        return(
            <div style={divStyle}>
              <span onClick={rightArrowClickHandler} style={arrowStyleRight}>&gt;</span>  
              <span onClick={leftArrowClickHandler} style={arrowStyleLeft}>&lt;</span>  
              <CarouselItem src={item.src}
                              alt={item.alt}
                              htmlattributes = {item.htmlAttributes}  
              />
            </div>);
    }
}

export default Carousel;

Carousel.propTypes = {
    arCarouselItemLogic : PropTypes.arrayOf(PropTypes.object)
}

