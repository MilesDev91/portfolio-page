import { h, Component } from 'preact';
import classes from './carousel.css';

export default class ComponentName extends Component {

    state = {
        position: 1
    }

    render () {
        let carouselImage = [classes.carousel];
        console.log(carouselImage);
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
        console.log(carouselImage);
        return (
            <div class={carouselImage.join(' ')}>
                <p>Hi I am a carousel</p>
            </div>
        );
    }
}