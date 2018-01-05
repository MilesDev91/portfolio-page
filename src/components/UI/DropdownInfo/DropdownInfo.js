import { h } from 'preact';
import classes from './DropdownInfo.css';

const dropdownInfo = (props) => {
    let dropdownContent;
    if (props.show) {
        dropdownContent = <div>{props.content}</div>;
    }

    return (
        <div class={props.class}>
            <h2>{props.title}</h2>
            {dropdownContent}
        </div>
    );
}

export default dropdownInfo;

/**
 * planned props
 *      Title
 *      Show (boolean)
 *      Content
 *      class (additional styling)
 */