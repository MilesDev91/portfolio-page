import { h, Component } from 'preact';
import classes from './CarouselButton.css';

class CarouselButton extends Component {

    state = {
        buttonClass: classes.button
    }


    btnAnimTrigger = false;

    buttonAnimationHandler = (direction) => {
        if (!this.btnAnimTrigger) {
            this.btnAnimTrigger = true;
            let btnClass = [classes.button];
            if (direction === "left") {
                btnClass.push(classes.buttonAnimationLeft);
                this.setState({ buttonClass: btnClass.join(' ') });
                this.timeoutHandler(() => this.setState({ buttonClass: classes.button }));
            } else {
                btnClass.push(classes.buttonAnimationRight);
                this.setState({ buttonClass: btnClass.join(' ') });
                this.timeoutHandler(() => this.setState({ buttonClass: classes.button }));
            }
            this.props.positionChange(this.props.direction);
        }
    }

    timeoutHandler = (change) => {
        setTimeout(() => {
            change();
            this.btnAnimTrigger = false;
        }, this.props.animationTiming);
    }

    render () {
        return (
            <button class={this.state.buttonClass} onClick={() => this.buttonAnimationHandler(this.props.direction)}>
                {this.props.children}
            </button>
        );
    }
}

export default CarouselButton;