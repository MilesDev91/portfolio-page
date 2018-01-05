import { h } from 'preact';
import classes from './PortfolioItem.css';
import Thumbnail from '../Thumbnail/Thumbnail';
import DropdownInfo from '../UI/DropdownInfo/DropdownInfo';

const portfolioItem = (props) => (
    <div class={classes.portfolioItem}>
        <Thumbnail class={classes.thumbnail} image={props.image} link="https://evening-gorge-71276.herokuapp.com/" />
        <DropdownInfo title="Hello" content="This is some sample content" show={true} />
    </div>
);

export default portfolioItem;