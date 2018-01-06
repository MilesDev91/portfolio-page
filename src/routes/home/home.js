import { h, Component } from 'preact';
import style from './home.css';

import Carousel from '../../components/Carousel/Carousel.js';
import withResizeHandler from '../../hoc/withResizeHandler';

const imgArray = ["../../assets/image/Initial.jpeg", "../../assets/image/Second.png", "../../assets/image/Third.jpeg"]
const imgText = ["Let your ideas become a reality.", "Build your site with the React framework for faster performance.", "Keep in touch through Github and daily emails."]

class Home extends Component {

	render () {
		let images = imgArray.map((img, index) => {
			return (
				<div class={style.crop}>
					<div class={style.overlay}></div>
					<img class={style.smallImage} src={img} />
					<div class={style.imgText}>
						{imgText[index]}
					</div>
				</div>
			);
		});

		if (window.matchMedia("(min-width: 600px)").matches) {
			images = <div><Carousel images={imgArray} animationTiming={500} /></div>;
		}

		return (
			<div class={style.home}>
				{images}
				<div class={style.information}>
					<div class={style.intro}>
						<div class={style.text}>
							<h1>About Me</h1>
							<p>Hello, I am a junior web developer who is quickly gaining practical experience in the field.</p>
						</div>
						<div class={style.block}></div>
					</div>
					<div class={style.services}>
						<div class={style.block}></div>
						<div class={style.text}>
							<h1>Services</h1>
							<p>These are some of the various skills and services that I have to offer.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withResizeHandler(Home);
