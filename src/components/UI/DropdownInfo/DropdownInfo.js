import { h, Component } from 'preact';
import classes from './DropdownInfo.css';
import { Icon } from 'react-fa';

class DropdownInfo extends Component {
    state = {
        show: false
    }

    showHandler = () => {
        this.setState({ show: !this.state.show });
        console.log(this.state.show);
    }

    render () {

        let dropdownContent;

        let buttonIcon = <Icon onClick={this.showHandler} name="angle-right" />;

        if (this.state.show) {
            dropdownContent = <p>{this.props.content}</p>;
            buttonIcon = <Icon onClick={this.showHandler} name="angle-down" />;
        }
        return (
            <div class={classes.dropdownInfo} >
                <h2>{this.props.title} {buttonIcon}</h2>
                {dropdownContent}
            </div>
        );
    }


}

export default DropdownInfo;

/**
 * planned props
 *      Title
 *      Show (boolean)
 *      Content
 *      class (additional styling)
 */