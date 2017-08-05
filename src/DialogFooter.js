import React from "react";
import PropTypes from "prop-types";
import cs from "classnames";

const DialogFooter = (props) => {
    const buttons = props.buttons;
    if (!buttons || buttons.length == 0) {
        return false;
    }

    const dialogButtons = buttons.map(function (button, index) {
        if (React.isValidElement(button)) {
            return button;
        }

        const { text, onClick, className } = button;

        return (
            <button
                key={`button-${index}`}
                type="button"
                className={cs("button", className)}
                onClick={onClick}>
                {text}
            </button>
        );
    }, this);

    return (
        <div className="ui-dialog-buttonpane">
            <div className="ui-dialog-buttonset">
                {dialogButtons}
            </div>
        </div>
    );
};

DialogFooter.propTypes = {
    buttons: PropTypes.array,
    onClose: PropTypes.func.isRequired
};

export default DialogFooter;