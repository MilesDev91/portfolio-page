/**
 * Carousel Component
 * @description Sliding carousel
 *      Props:  images{array of urls for src property}
 *              this.animationTiming{number of ms for button and image animations}
 * @author [Miles Coffin](https://github.com/MilesDev91)
 * 
 * 
 */

import { h, Component } from 'preact';
import classes from './Carousel.css';
import { Icon } from 'react-fa';
import CSSTransition from 'react-transition-group/CSSTransition';
import Timeout from '../../utility/timeout';
import CarouselButton from './CarouselButton/CarouselButton';

const animRef = {
    c1to2: classes.carousel1to2,
    c2to3: classes.carousel2to3,
    c3to1: classes.carousel3to1,
    c1to3: classes.carousel1to3,
    c2to1: classes.carousel2to1,
    c3to2: classes.carousel3to2
}

class Carousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            imageClass: [classes.carousel]
        }


        this.animationTiming = this.props.animationTiming;
        this.imageAnimation = null;
    }



    // componentDidUpdate () {
    //     this.state.leftButtonClass;
    //     this.state.rightButtonClass;
    //     this.state.imageClass = [classes.carousel];
    // }

    positionChangedHandler = (direction) => {
        let oldPosition = this.state.position;
        console.log(this.props.images.length);
        let maxPosition = this.props.images.length;
        if (direction === "left") {
            if (oldPosition === 1) {
                this.setState({ position: maxPosition });
                this.imageAnimationHandler(oldPosition, maxPosition);
            } else {
                this.setState({ position: oldPosition - 1 });
                this.imageAnimationHandler(oldPosition, oldPosition - 1);
            }

        } else {
            if (oldPosition === maxPosition) {
                this.setState({ position: 1 });
                this.imageAnimationHandler(oldPosition, 1);
            } else {
                this.setState({ position: this.state.position + 1 });
                this.imageAnimationHandler(oldPosition, oldPosition + 1);
            }
        }
        console.log(this.state.position);
    }

    imageAnimationHandler = (oldP, newP) => {
        let imgClass = this.state.imageClass;
        imgClass.push(eval("animRef.c" + oldP + "to" + newP + ""));
        this.setState({ imageClass: imgClass });
    }

    timeoutHandler = (change) => {
        setTimeout(() => {
            change;
            this.btnAnimTrigger = false;
        }, this.animationTiming);
    }

    render () {

        const images = this.props.images.map((image, index) => {
            return <img src={image} key={index} />;
        });


        //let carouselImage = [classes.carousel];
        // switch (this.state.position) {
        //     case 1:
        //         carouselImage.push(classes.carousel1);
        //         break;
        //     case 2:
        //         carouselImage.push(classes.carousel1to2);
        //         break;
        //     default:
        //         return nusll;
        //}
        return (
            <div class={classes.carousel}>
                <div class={this.state.imageClass.join(' ')}>
                    {images}
                </div >
                <div class={classes.overlay}>

                </div>
                <div class={classes.middle}>
                    <CarouselButton animationTiming={this.animationTiming} positionChange={this.positionChangedHandler} class={this.state.leftButtonClass} direction="left">
                        <Icon name="angle-left" size="3x" />
                    </CarouselButton>
                    <p>Hi I am a carousel</p>
                    <CarouselButton animationTiming={this.animationTiming} positionChange={this.positionChangedHandler} class={this.state.rightButtonClass} direction="right" >
                        <Icon name="angle-right" size="3x" />
                    </CarouselButton>
                </div >
            </div >
        );
    }
}

export default Carousel;