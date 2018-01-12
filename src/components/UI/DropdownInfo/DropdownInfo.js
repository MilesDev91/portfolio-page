import { h, Component } from 'preact';
import classes from './DropdownInfo.css';
import { Icon } from 'react-fa';

class DropdownInfo extends Component {
    state = {
        show: this.props.show
    }

    showHandler = () => {
        this.setState({ show: !this.state.show });
    }

    render () {

        let dropdownContent;

        let buttonIcon = <Icon name="angle-right" />;

        if (this.state.show) {
            dropdownContent = <p>{this.props.content}</p>;
            buttonIcon = <Icon name="angle-down" />;
        }
        return (
            <div class={classes.dropdownInfo} >
                <h2 onClick={this.showHandler}>{this.props.title} {buttonIcon}</h2>
                {dropdownContent}
            </div>
        );
    }


}

export default DropdownInfo;