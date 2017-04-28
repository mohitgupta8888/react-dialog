import React from "react";

class DialogButton extends React.Component {
    close = () => {
        if (this.props.onClose)
            this.props.onClose();
    }

    onClick = () => {
        this.props.onClick.call(this);

        return false;
    }

    render() {
        return (
            <button type="button" className="button-group__item button mr1" onClick={this.onClick}>{this.props.text}</button>
        );
    }
}

DialogButton.propTypes = {
    text: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func.isRequired
};

export default DialogButton;