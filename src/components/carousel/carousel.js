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
            position: 1
        }

        this.imageClass = [classes.carousel];
        this.pClass = null;
        this.animationTiming = this.props.animationTiming;
    }



    componentDidUpdate () {
        this.imageClass = [classes.carousel];
        this.pClass = null;
    }

    /**
     * @description Fed into carousel buttons. Determines from which image the animation starts and to which it ends.
     * @param {string} direction Either "left" or "right". "right" can be anything because it is the else condition.
     */
    positionChangedHandler = (direction) => {
        let oldPosition = this.state.position;
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
    }

    /**
     * @description Simply takes the old position and new position from
     * positionChangedHandler and pushes a reference to the proper animation
     * class onto the imageClass state property.
     * @param {number} oldP The current(old) state position.
     * @param {number} newP The new position.
     */
    imageAnimationHandler = (oldP, newP) => {
        this.imageClass.push(eval("animRef.c" + oldP + "to" + newP + ""));
    }

    render () {


        let cText;

        switch (this.state.position) {
            case 1:
                this.pClass = classes.carouselp1;
                cText = <p class={this.pClass}>This is slide one</p>;
                break;
            case 2:
                this.pClass = classes.carouselp2;
                cText = <p class={this.pClass}>This is slide two</p>;
                break;
            case 3:
                this.pClass = classes.carouselp3;
                cText = <p class={this.pClass}>This is slide three</p>;
        }

        const images = this.props.images.map((image, index) => {
            return <img src={image} key={index} />;
        });

        return (
            <div class={classes.carousel}>
                <div class={this.imageClass.join(' ')}>
                    {images}
                </div >
                <div class={classes.overlay}>

                </div>
                <div class={classes.middle}>
                    <CarouselButton animationTiming={this.animationTiming} positionChange={this.positionChangedHandler} direction="left">
                        <Icon name="angle-left" size="3x" />
                    </CarouselButton>
                    {cText}
                    <CarouselButton animationTiming={this.animationTiming} positionChange={this.positionChangedHandler} direction="right" >
                        <Icon name="angle-right" size="3x" />
                    </CarouselButton>
                </div >
            </div >
        );
    }
}

export default Carousel;