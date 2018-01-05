import { h } from 'preact';
import classes from './PortfolioItem.css';
import Thumbnail from '../Thumbnail/Thumbnail';
import DropdownInfo from '../UI/DropdownInfo/DropdownInfo';

const portfolioItem = (props) => (
    <div class={classes.portfolioItem}>
        <Thumbnail width={props.imageWidth} height={props.imageHeight} class={classes.thumbnail} image={props.image} link={props.link} />
        <DropdownInfo title={props.title} content={props.content} show={true} />
    </div>
);

export default portfolioItem;