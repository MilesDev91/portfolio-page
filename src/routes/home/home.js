import { h, Component } from 'preact';
import style from './home.css';

import Carousel from '../../components/Carousel/Carousel.js';

const imgArray = ["../../assets/image/Initial.jpeg", "../../assets/image/Second.png", "../../assets/image/Third.jpeg"]

export default class Home extends Component {
	render () {
		return (
			<div class={style.home}>
				<div>
					<Carousel images={imgArray} animationTiming={500} />
				</div>
				<div class={style.intro}>
					<p>Hello, I am a junior web developer who is quickly gaining practical experience in the field.</p>
				</div>
			</div>
		);
	}
}
