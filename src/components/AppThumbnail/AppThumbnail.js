import { h } from 'preact';
import classes from './AppThumbnail.css';

const appThumbnail = (props) => (
    <div class={classes.appThumbnail}>
        <a href={props.link}><img src={props.image} /></a>
    </div>
);

export default appThumbnail;