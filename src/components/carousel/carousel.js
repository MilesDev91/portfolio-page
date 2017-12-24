import { h, Component } from 'preact';
import classes from './Carousel.css';
import { Icon } from 'react-fa';
import CSSTransition from 'react-transition-group/CSSTransition';
import Timeout from '../../utility/timeout';

const animationTiming = 500;

class Carousel extends Component {

    state = {
        position: 1,
        leftButtonClass: [],
        rightButtonClass: [],
        imageClass: []
    }

    btnAnimTrigger = false;

    positionChangedHandler = (direction) => {
        if (direction === "left") {
            this.buttonAnimationHandler("left");
        } else {
            this.setState({ position: this.state.position + 1 });
            this.buttonAnimationHandler("right");
        }

    }

    buttonAnimationHandler = (direction) => {
        let btnClass = [];
        if (!this.btnAnimTrigger) {
            console.log("in button handler");
            this.btnAnimTrigger = true;
            if (direction === "left") {
                btnClass.push(classes.buttonAnimationLeft);
                this.setState({ leftButtonClass: btnClass });
                this.props.clearTimeouts();
                this.timeoutHandler({ leftButtonClass: [] });
            } else {
                btnClass.push(classes.buttonAnimationRight);
                this.setState({ rightButtonClass: btnClass });
                this.props.clearTimeouts();
                this.timeoutHandler({ rightButtonClass: [] });
            }
        }
    }

    imageAnimationHandler = (direction) => {
        let imgClass = [];
        imgClass.push(classes.carousel1to2);
        this.setState({ imageClass: imgClass });
    }

    timeoutHandler (stateChange) {
        this.props.setTimeout(() => {
            this.setState(stateChange);
            console.log(this.state.leftButtonClass);
            this.btnAnimTrigger = false;
        }, animationTiming);
    }

    render () {
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
                <img src="../../assets/image/Initial.jpeg" />
                <img src="../../assets/image/Second.jpeg" />
                <img src="../../assets/image/Third.jpeg" />
                <div class={classes.overlay}>
                    <div class={classes.middle}>
                        <button class={this.state.leftButtonClass.join(' ')} onClick={() => this.positionChangedHandler("left")}><Icon name="angle-left" size="3x" /></button>
                        <p>Hi I am a carousel</p>
                        <button class={this.state.rightButtonClass.join(' ')} onClick={() => this.positionChangedHandler("right")}><Icon name="angle-right" size="3x" /></button>
                    </div>
                </div>
            </div >
        );
    }
}

export default Timeout(Carousel);