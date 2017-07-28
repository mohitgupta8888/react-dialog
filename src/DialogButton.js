import PropTypes from "prop-types";
import React from "react";
import cs from "classnames";

class DialogButton extends React.Component {
    close = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    onClick = () => {
        this.props.onClick.call(this);

        return false;
    }

    render() {
        return (
            <button
                type="button"
                className={cs("button", { disabled: this.props.disabled })}
                disabled={this.props.disabled}
                onClick={this.onClick}>
                {this.props.text}
            </button>
        );
    }
}

DialogButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    disabled: PropTypes.bool
};

export default DialogButton;