import { h, Component } from 'preact';
import classes from './Carousel.css';
import { Icon } from 'react-fa';

export default class ComponentName extends Component {

    state = {
        position: 1
    }

    positionChangedHandler = () => {

    }

    render () {
        let carouselImage = [classes.carousel];
        switch (this.state.position) {
            case 1:
                carouselImage.push(classes.carousel1);
                break;
            case 2:
                carouselImage.push(classes.carousel2);
                break;
            default:
                return null;
        }
        return (
            <div class={carouselImage.join(' ')}>
                <div class={classes.overlay}>
                    <div class={classes.middle}>
                        <button><Icon name="angle-left" size="3x" /></button>
                        <p>Hi I am a carousel</p>
                        <button><Icon name="angle-right" size="3x" /></button>
                    </div>
                </div>
            </div>
        );
    }
}